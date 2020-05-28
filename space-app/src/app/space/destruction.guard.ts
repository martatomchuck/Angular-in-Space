import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SpaceShipService } from './space-ship.service';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {

  constructor(private spaceShipService: SpaceShipService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
      const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
      if (hasSpaceShips) { return true; }

      alert('Nie ma statków w hangarze!');
      return this.router.parseUrl('/');
  }
}
