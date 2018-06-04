import { Component, OnInit } from '@angular/core';
import {LocalUserService} from '../../services';

@Component({
  selector: 'app-active-sessions',
  templateUrl: './active-sessions.component.html',
  styleUrls: ['./active-sessions.component.css']
})
export class ActiveSessionsComponent implements OnInit {
  data;
  dataSource;
  fieldnames = `
  ID;
  UserID;
  Created
  `;
  fields = ['ID', 'UserID', 'Created'];
  constructor(private localUserService: LocalUserService) { }

  ngOnInit() {
    this.dataSource = this.localUserService.fetchUsersDevices();
  }

}
