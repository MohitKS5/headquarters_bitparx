import {Component, OnInit, ViewChild} from '@angular/core';

import {LocalUser} from '../../models';
import {LocalUserService} from '../../services';
import {Funcs} from '@utils';
import {catchError, map, tap} from 'rxjs/internal/operators';
import {UiService} from '../../../utility/services/ui.service';

@Component({
  moduleId: module.id,
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  localUsers: Array<LocalUser> = [];
  isAdmin = false;
  @ViewChild('drawer') drawer;

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

  constructor(private localUserService: LocalUserService, private functions: Funcs, private ui: UiService) {
  }

  compare(a,b) {
    if (a.username < b.username)
      return -1;
    if (a.username > b.username)
      return 1;
    return 0;
  }

  ngOnInit(): void {
    this.dataSource = this.localUserService.fetchFlattenedUsers().pipe(map(res => res.sort(this.compare)));
    this.ui.sidenavOpen.subscribe(() => this.drawer.toggle())
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

  TREE_DATA = `
    {
    "Documents": {
      "dashboard": "/dashboard",
      "login": "/login",
      "compiler": "ts"
     },
     "Levels": {
      "All": "levels",
      "requested": "levelsrequested",
      "admins": "admins"
     },
    "Downloads": {
        "angular": "src",
      "core": "ts",
      "compiler": "tsadf"
    },
    "Pictures": {
       "angular": "sasdfrc",
      "core": "ts",
      "compiler": "tszxcv"
    },
    "Applications": {
       "angular": "src",
      "core": "ts",
      "compiler": "tasdfs"
    }
}`;
}
