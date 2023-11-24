import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loggedInAuthGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
  let isLoggedId = localStorage.getItem('isloggedIn');
  if (isLoggedId === 'true') {
    _router.navigate(['/home/dashboard']);
    return false;
  } else {
    return true;
  }
};
