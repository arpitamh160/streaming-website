import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('isloggedIn', "false");
  }

  onSubmit() {
    this.emailError = '';
    this.passwordError = '';

    if (!this.email || !this.password) {
      if (!this.email) {
        this.emailError = 'Please enter your email.';
      }
      if (!this.password) {
        this.passwordError = 'Please enter your password.';
      }
      return;
    }
    const isLoggedIn = this.userService.isLoggedIn(this.email, this.password);

    if (isLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      this.passwordError = 'Invalid email or password';
    }
  }

}