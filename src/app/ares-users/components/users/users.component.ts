import { Component, OnInit } from '@angular/core';

import { LocalUser } from '../../models';
import {LocalUserService} from '../../services';
import {Funcs} from '@utils';
import {catchError} from 'rxjs/internal/operators';

@Component({
  moduleId: module.id,
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {

  localUsers: Array<LocalUser> = [];
  isAdmin = false;

  constructor(private localUserService: LocalUserService, private functions: Funcs) {}

  ngOnInit(): void {
    this.localUserService.getUsers()
      .subscribe((users) => {
        this.localUsers = users;
        console.log(users);
      });
  }

  approve = (localUser: LocalUser, level: string) => {
    this.localUserService.approve(localUser.uid, level).pipe(
      catchError((err) =>this.functions.handleError(err.message))
    ).subscribe();
  };

  deny = (localUser: LocalUser, level: string, where: string): void => {
    const $response = where === 'levelsRequested' ?
      this.localUserService.deny(localUser.uid, level) : this.localUserService.demote(localUser.uid, level);
      $response.pipe(catchError((err) =>this.functions.handleError(err.message)))
        .subscribe();
  };
}
