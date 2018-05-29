import {Component, OnInit, ViewChild} from '@angular/core';

import { LocalUser } from '../../models';
import {LocalUserService} from '../../services';
import {Funcs} from '@utils';
import {catchError, map, tap} from 'rxjs/internal/operators';
import {UiService} from '../../../utility/services/ui.service';

@Component({
  moduleId: module.id,
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {

  localUsers: Array<LocalUser> = [];
  isAdmin = false;
  @ViewChild('drawer') drawer;

  constructor(private localUserService: LocalUserService, private functions: Funcs, private ui: UiService) {}
  ngOnInit(): void {
    this.localUserService.getUsers()
      .subscribe((users) => {
        this.localUsers = users;
        console.log(users);
      });

    this.ui.sidenavOpen.subscribe(() => this.drawer.toggle())
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

export const TREE_DATA = `
  {
    "Documents": {
      "angular": {
        "src": {
          "core": "ts",
          "compiler": "ts"
        }
      },
      "material2": {
        "src": {
          "button": "ts",
          "checkbox": "ts",
          "input": "ts"
        }
      }
    },
    "Downloads": {
        "Tutorial": "html",
        "November": "pdf",
        "October": "pdf"
    },
    "Pictures": {
        "Sun": "png",
        "Woods": "jpg",
        "Photo Booth Library": {
          "Contents": "dir",
          "Pictures": "dir"
        }
    },
    "Applications": {
        "Chrome": "app",
        "Calendar": "app",
        "Webstorm": "app"
    }
}`;
