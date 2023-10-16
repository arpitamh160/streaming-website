import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  emailError: string = '';
  nameError: string = '';
  signupErrorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  signup(): void {
    this.resetErrors(); 
    if (!this.username) {
      this.nameError = 'Please enter a user name';
      return;
    }
    if (!this.email) {
      this.emailError = 'Please enter a valid email address.';
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.emailError = 'Invalid email address';
      return;
    }
    if (!this.password) {
      this.passwordError = 'Please enter a password';
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;

    if (!passwordRegex.test(this.password)) {
      this.passwordError = `Password must be at least 8 characters long <br>and contain one uppercase letter and one special character`;
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = "Passwords don't match";
      return;
    }


    const isRegistered = this.userService.signup(this.username, this.email, this.password);

    if (isRegistered) {
      this.router.navigate(['/login']);
    } else {
      this.signupErrorMessage = 'User with the same email already exists';
    }
  }

  resetErrors() {
    this.nameError='';
    this.emailError = '';
    this.passwordError = '';
    this.signupErrorMessage = '';
    this.confirmPasswordError='';

  }
}
