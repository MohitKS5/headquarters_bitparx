import {Component, OnInit} from '@angular/core';

import {LoggedUserService} from '../../services';
import {LocalUser} from '../../models';
import {Observable, of} from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  localUser: Observable<LocalUser>;
  tiles: Array<Tile> = [
    {
      name: 'LocalUsers',
      level: 'Admin',
      link: '/users',
    },
    {
      name: 'Profile',
      level: 'Member',
      link: '/profile'
    }
  ];

  constructor(private localUserService: LoggedUserService) {
  }


  checklevel(str: string) {
    if (str === "Member")
      return of(true);
    return this.localUserService.checkLevel(str);
  }

  ngOnInit(): void {
    this.localUser = this.localUserService.currentUser;
  }

}

class Tile {
  name: string;
  level: string;
  link: string;
}
