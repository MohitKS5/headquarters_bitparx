import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {LoggedUserService} from '../../services';
import {Funcs} from 'app/utility/functions';

@Component({
  moduleId: module.id,
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public loginService: LoggedUserService,
              private router: Router,
              private functions: Funcs) {
  }

  logout = () => {
    this.loginService.logout()
      // .then(() => this.router.navigate(['login']))
      // .catch(err => this.functions.handleError(err.message));
  }

}
