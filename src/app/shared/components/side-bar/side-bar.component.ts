import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/pages/components/logout/logout.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  constructor(private router: Router, private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '30rem',
      height: '10rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'logout') {
        this.logout();
      }
    });
  }

  logout() {
    localStorage.setItem('isloggedIn', 'false');
    this.router.navigate(['/login']);
  }
}

