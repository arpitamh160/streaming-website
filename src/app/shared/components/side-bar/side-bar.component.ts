import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  showOptions = false;
  constructor(private router: Router) {}
  logout() {
    localStorage.setItem('isloggedIn', 'false');
    this.router.navigate(['/login']);
  }

  cancel() {
    this.showOptions = false;
  }
  consoledashboard() {
    console.log("clicked");
  }
}
