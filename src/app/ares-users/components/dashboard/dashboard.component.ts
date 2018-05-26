import {Component, OnInit} from '@angular/core';

import {LoggedUserService} from '../../services';
import {LocalUser} from '../../models';
import {Observable} from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  localUser: Observable<LocalUser>;


  constructor(private localUserService: LoggedUserService) {
  }


  checklevel(str: string) {
    return this.localUserService.checkLevel(str);
  }

  ngOnInit(): void {
    this.localUser = this.localUserService.currentUser;
  }

}
