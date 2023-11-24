import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/pages/components/logout/logout.component';
import { SearchService, MediaContent } from 'src/app/pages/services/search/search.service';
import { UserService, User } from '../../services/user-service/user.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() placeholderText: string = '';
  searchResult: MediaContent[] = [];
  noResults: boolean = true;
  currentUser: User | undefined;

  constructor(
    private router: Router,
    private searchService: SearchService,
    private dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

  searchItem(search_result: KeyboardEvent) {
    if (search_result) {
      const element = search_result.target as HTMLInputElement;
      this.searchService.searchMedia(element.value).subscribe((result) => {
        this.searchResult = result;
        this.noResults = !this.searchResult || !this.searchResult.length;
      });
    }
  }

  performSearch(val: string) {
    if (val !== '') {
      this.router.navigate([`home/search/${val}`]);
    }
  }

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