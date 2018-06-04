import { Component, OnInit } from '@angular/core';
import {LocalUserService} from '../../services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService: LocalUserService) { }
  fieldheaders = ['Username', 'Created','Displayname', 'Avatar'];
  fieldnames = ['Username', 'Created', 'Displayname', 'AvatarUrl'];
  dataSource;
  displayOrder = ['Sno', 'Password', 'Username', 'Created', 'Displayname', 'Avatar'];

  ngOnInit() {
    this.dataSource = this.userService.fetchActiveUsers()
  }

  changePassword(){

  }
}
