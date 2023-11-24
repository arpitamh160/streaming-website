import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
  let isLoggedId = localStorage.getItem('isloggedIn');
  if (isLoggedId === 'true') {
    return true;
  } else {
    _router.navigate(['/login']);
    return false;
  }
}
