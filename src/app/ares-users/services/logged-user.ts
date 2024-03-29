import {Injectable} from '@angular/core';


import {BehaviorSubject, Observable, of} from 'rxjs';
import {LocalUser} from 'app/ares-users/models/localUser';

import {Router} from '@angular/router';
import {Funcs} from 'app/utility/functions';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {map, tap} from 'rxjs/internal/operators';
import {defaultUser, ILocalUser} from '../models';
import {BitServResponse, flattenNullBool, NullBool, Register} from '../models/response';

@Injectable()
export class LoggedUserService {
  currentUser: BehaviorSubject<LocalUser>;
  isAuthenticated$: BehaviorSubject<{ loaded: boolean, payload: string }>;

  constructor(private http: HttpClient,
              private router: Router,
              private functions: Funcs) {
    this.currentUser = new BehaviorSubject<LocalUser>(null);
    this.isAuthenticated$ = new BehaviorSubject({loaded: false, payload: null});
  }

  signIn = (username: string, pass: string): void => {
    let $logged: Observable<any> = this.http.post<BitServResponse<Register>>('api/login', JSON.stringify({
      user: username,
      password: pass
    })).pipe(
      tap((res) => {
        this.isAuthenticated$.next({loaded: true, payload: res.JSON.access_token});
        this.router.navigate(['/dashboard']);
        this.currentUser.next({...res.JSON, ...defaultUser, username: username} as LocalUser)
      }),
      catchError(err => {
        this.isAuthenticated$.next({loaded: true, payload: null});
        return this.functions.handleError(err.error)
      })
    ) as Observable<ILocalUser>;
    $logged.subscribe((users) => {
      // this.currentUser.next({...users.JSON, ...defaultUser, username: username} as LocalUser)
    });
  };

  requestLevel(level: string) {
    return this.http.post('/api/levels/' + level.toLowerCase(), '', {headers: this.authHeader()}).pipe(
      tap(() => this.currentUser.pipe(
        map((res) => res.accountlevels[level] = {Valid: false, Value: false})
      ).subscribe()),
      catchError(err => this.functions.handleError(err.Error))
    );
  }

  logout() {
    let logout$ = this.http.post<any>('api/logout', null, {headers: this.authHeader()}).pipe(
      tap(() => {
        this.router.navigate(['login']);
        this.isAuthenticated$.next({loaded: true, payload: null});
        this.currentUser.next(null);
      }),
      catchError((err) => this.functions.handleError(err.Error)
      ));
    logout$.subscribe();
  };

  authHeader(): HttpHeaders {
    let Headers: HttpHeaders;
    this.isAuthenticated$.subscribe(
      (res) => Headers = new HttpHeaders().set('Authorization', 'Bearer ' + res.payload)
    );
    return Headers
  }

  checkLevel(levelexp: string) {
    return this.currentUser.pipe(
      map((res) => !!res && flattenNullBool(res.accountlevels[levelexp]))
    );
    // return of(true)
  }

  signUp = (username: string, pass: string) => {
    let $logged: Observable<BitServResponse<Register>> = this.http.post<BitServResponse<Register>>('api/register', JSON.stringify({
      username: username,
      password: pass,
      auth: {
        type: 'm.login.dummy'
      }
    })).pipe(
      tap((res) => {
        this.isAuthenticated$.next({loaded: true, payload: res.JSON.access_token});
        this.router.navigate(['/dashboard'])
      }),
      catchError(err => {
        this.isAuthenticated$.next({loaded: true, payload: null});
        return this.functions.handleError(err.error)
      })
    );
    $logged.subscribe((users) => users ? this.currentUser.next({...users.JSON, ...defaultUser, username: username} as LocalUser) : '');
  }
//
// requestLevel = (level: string): Observable<number> => this.currentUser.pipe(
//   first(),
//   switchMap((user: LocalUser) => fromPromise(this.userRef(user.uid).update({
//     levelsRequested: [...user.levelsRequested, level]
//   } as LocalUser)).pipe(
//     map(() => 200),
//     catchError((err) => this.functions.handleError(err.message))
//   )));
//
// logout = (): Promise<void | boolean> => this.afAuth.auth.signOut();
//
// checkLevel = (str: string) => this.currentUser.pipe(
//   map((user) => user ?
//   user.levelsCurrent.includes(str) || user.levelsCurrent.includes('admin') : false)
// );
// checkAdmin = (): Observable<boolean> => this.checkLevel('admin');
}
