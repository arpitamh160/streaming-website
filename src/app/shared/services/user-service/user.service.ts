import { Injectable } from '@angular/core';

export interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  isLoggedIn(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('isloggedIn', 'true');
      localStorage.setItem('currentUser', user.email);
      console.log('User logged in:', user);
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser(): User | undefined {
    const isLoggedIn = localStorage.getItem('isloggedIn');
    if (isLoggedIn === 'true') {
      const userEmail = localStorage.getItem('currentUser');
      console.log('Current user email:', userEmail);
      return this.users.find(user => user.email === userEmail);
    }
    return undefined;
  }

  signup(username: string, email: string, password: string): boolean {
    if (this.users.some(user => user.email === email)) {
      return false;
    }
    const newUser: User = { username, email, password };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }
}