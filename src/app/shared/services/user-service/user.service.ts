import { Injectable } from '@angular/core';
interface User{
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

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({ email: user.email }));
      return true;
    } else {
      return false;
    }
  }

  signup(username: string, email: string, password: string): boolean {

    if (this.users.some(user => user.email === email)) {
      return false;
    }

    const newUser: User= { username, email, password };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

}