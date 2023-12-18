import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const CanActivate = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isLoggedIn())
    return true
  else {
    router.navigate(['/login']);
    return false;
  }
}
