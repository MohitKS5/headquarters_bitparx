import {LocalUser} from 'app/ares-users/models/localUser';
import {from as fromPromise, Observable, of} from 'rxjs';
import {Funcs} from 'app/utility/functions';
import {Injectable} from '@angular/core';
import {catchError, first, map, switchMap} from 'rxjs/internal/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BitServResponse, ReceivedAccessLevels, Access, flattenNullBool, ReceivedAccounts, ReceivedDevices} from '../models/response';
import {LoggedUserService} from './logged-user';
import {Accounts} from '../models/accounts';
import {Devices} from '../models/devices';


@Injectable()
export class LocalUserService {
  constructor(private functions: Funcs, private http: HttpClient, private auth: LoggedUserService) {
  }

  approve = (username, level) => this.http.put('/api/levels/' + level + '/' + username, '', {headers: this.auth.authHeader()});
  deny = (username, level) => this.http.delete('/api/levels/' + level + '/' + username, {headers: this.auth.authHeader()});

  fetchUserLevels = () => this.http.post<BitServResponse<Array<ReceivedAccessLevels>>>(
    '/api/levels', '', {headers: this.auth.authHeader()});

  fetchFlattenedUsers() {
    return this.fetchUserLevels().pipe(
      map(
        (res: BitServResponse<Array<ReceivedAccessLevels>>) => res.JSON
          .map((val) => {
            return {
              username: val.Username,
              admin: flattenNullBool(val.Access.Admin),
              moderator: flattenNullBool(val.Access.Moderator)
            }
          })
      ))
  }

  fetchActiveUsers = () => this.http.post<BitServResponse<Array<ReceivedAccounts>>>('/api/accounts', '', {headers: this.auth.authHeader()}).pipe(
    map((values) => {
        return values.JSON.map((res) => {
          res.Created = new Date(+res.Created).toLocaleString();
          return {...res.Profile, ...res} as Accounts
        })
      }
    ));

  fetchUsersDevices = () => this.http.post<BitServResponse<Array<ReceivedDevices>>>('/api/devices', '', {headers: this.auth.authHeader()}).pipe(
    map((values) => {
        console.log(values);
        return values.JSON.map((res) => {
          res.Created = new Date(+res.Created).toLocaleString();
          return {...res} as Devices
        })
      }
    ))

  disableRegistration = (val: boolean) => {
    let status$ = val ? this.http.delete('/api/registration', {headers: this.auth.authHeader()}) :
      this.http.put('/api/registration',"", {headers: this.auth.authHeader()});
    status$.pipe(
      catchError(err => this.functions.handleError(err.Error))
    ).subscribe()
  };

  isRegistrationDisabled = () => this.http.get<BitServResponse<boolean>>('/api/registration',{headers: this.auth.authHeader()}).pipe(
    map((res) => res.JSON),
    catchError(err => this.functions.handleError(err.Error))
  )
  // res.Created = toDate(res.Created)

  // public userRef = (id: string): AngularFirestoreDocument<LocalUser> => this.afs.doc(`navbar-sidenav/${id}`);

  // approve(id: string, level: string): Observable<number> {
  //   const userRef = this.userRef(id);
  //   return userRef.valueChanges().pipe(
  //     first(),
  //     switchMap((user: LocalUser) =>
  //      update({
  //         levelsRequested: [...user.levelsRequested.filter((res) => res !== level)],
  //         levelsCurrent: [...user.levelsCurrent, level]
  //       } as LocalUser)).pipe(
  //         map(() => 200),
  //         catchError((err) => this.functions.handleError(err.message))
  //      )
  //   )
  // }
  //
  // deny(id: string, level: string): Observable<any> {
  //   const userRef = this.userRef(id);
  //   return userRef.valueChanges().pipe(
  //     first(),
  //     switchMap((user: LocalUser) =>
  //       userRef.update({
  //         levelsRequested: [...user.levelsRequested.filter((res) => res !== level)]
  //       } as LocalUser)).pipe(
  //       map(() => 200),
  //       catchError((err) => this.functions.handleError(err.message))
  //     )
  //   );
  // }
  //
  // demote(id: string, level: string): Observable<any> {
  //   const userRef = this.userRef(id);
  //   return userRef.valueChanges().pipe(
  //     first(),
  //     switchMap((user: LocalUser) =>
  //      userRef.update({
  //         levelsCurrent: [...user.levelsCurrent.filter((res) => res !== level)]
  //       } as LocalUser)).pipe(
  //         map(() => 200),
  //         catchError((err) => this.functions.handleError(err.message))
  //      )
  //   );
  // }
  //
  // getUsers = (): Observable<Array<LocalUser>> => this.afs.collection<LocalUser>('navbar-sidenav').valueChanges();
}
