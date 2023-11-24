import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { UserService } from 'src/app/shared/services/user-service/user.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers:[UserService]
})
export class LoginModule { }
