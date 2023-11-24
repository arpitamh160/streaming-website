import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogoutClick(): void {
    this.dialogRef.close('logout');
  }
}
