import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {LoggedUserService} from '../../services';
import {Funcs} from 'app/utility/functions';
import {UiService} from '../../../utility/services/ui.service';
import {map} from 'rxjs/internal/operators';

@Component({
  moduleId: module.id,
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public loginService: LoggedUserService,
              private router: Router,
              private functions: Funcs,
              private ui: UiService
  ) {
  }
  toggleit(){
    this.ui.sidenavOpen.next(true);
  }
  logout = () => {
    this.loginService.logout()
  }

}
