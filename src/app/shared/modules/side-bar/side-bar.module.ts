import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { SideBarRoutingModule } from './side-bar-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SideBarRoutingModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
