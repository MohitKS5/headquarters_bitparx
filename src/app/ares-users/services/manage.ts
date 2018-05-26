import {LocalUser} from 'app/ares-users/models/localUser';
import {from as fromPromise, Observable, of} from 'rxjs';
import {Funcs} from 'app/utility/functions';
import {Injectable} from '@angular/core';
import {catchError, first, map, switchMap} from 'rxjs/internal/operators';


@Injectable()
export class LocalUserService {
  constructor(private functions: Funcs) {
  }

  approve(a,b){return of(200)}
  deny(a,b){return of(200)}
  demote(a,b){return of(200)}
  getUsers(){return of(null)}
  // public userRef = (id: string): AngularFirestoreDocument<LocalUser> => this.afs.doc(`users/${id}`);

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
  // getUsers = (): Observable<Array<LocalUser>> => this.afs.collection<LocalUser>('users').valueChanges();
}
