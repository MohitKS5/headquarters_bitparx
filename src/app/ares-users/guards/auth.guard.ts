import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoggedUserService} from '../services/logged-user';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class LocalUserGuard implements CanActivate {

  constructor(private localUserService: LoggedUserService,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.localUserService.isAuthenticated$.pipe(
      map((result) => {
        if (!result.payload) {
          this.router.navigate(['login']);
        }
        return !!result.payload;
      })
    );
  }
}

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private localUserService: LoggedUserService,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.localUserService.isAuthenticated$.pipe(
      map((result) => {
        if (result.payload) {
          this.router.navigate(['dashboard']);
        }
        return !result.payload;
      })
    );
  }
}

@Injectable()
export class LevelGuard implements CanActivate {

  constructor(private localUserService: LoggedUserService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    // const level = route.data['level'] as string;
    // return this.localUserService.checkLevel(level)
    return of(true);
  }
}
