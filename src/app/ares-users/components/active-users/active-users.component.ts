import {Component, OnInit, ViewChild} from '@angular/core';
import {LocalUserService} from '../../services';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Accounts} from '../../models/accounts';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService: LocalUserService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  fieldheaders = ['Username', 'Created', 'Displayname', 'Avatar'];
  fieldnames = ['Username', 'Created', 'Displayname', 'AvatarUrl'];
  dataSource = new MatTableDataSource([]);
  displayOrder = ['Sno', 'Password', 'Username', 'Created', 'Displayname', 'Avatar'];

  isDisabled = this.userService.isRegistrationDisabled();

  DisableRegistration(val :boolean) {
    this.userService.disableRegistration(val)
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.userService.fetchActiveUsers().subscribe((res) => this.dataSource.data = res);
    // this.dataSource.sortingDataAccessor = (data, header) => data[this.fieldnames[this.fieldheaders.indexOf(header)]]
  }

  changePassword() {

  }
}
