import {LocalUser} from 'app/ares-users/models/localUser';
import {from as fromPromise, Observable, of} from 'rxjs';
import {Funcs} from 'app/utility/functions';
import {Injectable} from '@angular/core';
import {catchError, first, map, switchMap} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {BitServResponse, ReceivedAccessLevels, Access, flattenNullBool} from '../models/response';


@Injectable()
export class LocalUserService {
  constructor(private functions: Funcs, private http: HttpClient) {
  }

  approve = (username, level) => this.http.put('/api/levels/'+level+'/'+username, "");
  deny = (username, level) => this.http.delete('/api/levels/'+level+'/'+username);

  fetchUserLevels = () => this.http.post<BitServResponse<Array<ReceivedAccessLevels>>>('/api/levels', '');

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
