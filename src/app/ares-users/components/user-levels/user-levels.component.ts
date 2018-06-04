import { Component, OnInit } from '@angular/core';
import {catchError, map} from 'rxjs/internal/operators';
import {LocalUserService} from '../../services';
import {LocalUser} from '../../models';
import {UiService} from '../../../utility/services/ui.service';
import {Funcs} from '@utils';

@Component({
  selector: 'app-user-levels',
  templateUrl: './user-levels.component.html',
  styleUrls: ['./user-levels.component.css']
})
export class UserLevelsComponent implements OnInit {
  // mat table
  jsonData;
  data;
  dataSource;
  fieldnames = `
  username;
  admin;
  moderator
  `;
  fields = ['Username', 'Admin', 'Moderator'];
  constructor(private localUserService: LocalUserService, private functions: Funcs, private ui: UiService) { }

  compare(a,b) {
    if (a.username < b.username)
      return -1;
    if (a.username > b.username)
      return 1;
    return 0;
  }

  ngOnInit() {
    this.dataSource = this.localUserService.fetchFlattenedUsers().pipe(map(res => res.sort(this.compare)));
  }

  toggle($event) {
    console.log($event);
    if ($event.value) this.approve($event.tupple.username.toLowerCase(), $event.field.toLowerCase());
    else this.deny($event.tupple.username.toLowerCase(), $event.field.toLowerCase());
  }

  approve = (localUser: LocalUser, level: string) => {
    this.localUserService.approve(localUser, level).pipe(
      catchError((err) => this.functions.handleError(err.message))
    ).subscribe();
  };

  deny = (localUser: LocalUser, level: string) => {
    this.localUserService.deny(localUser, level).pipe(
      catchError((err) => this.functions.handleError(err.message))
    ).subscribe();
  };

}
