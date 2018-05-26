import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoggedUserService} from '../../services';
import {Funcs} from '@utils';
import {BehaviorSubject, Observable} from "rxjs/Rx";
import {map, tap} from "rxjs/internal/operators";
import {of} from "rxjs/index";

@Component({
  moduleId: module.id,
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted:Observable<boolean>;

  constructor(private loginService: LoggedUserService, private functions: Funcs,
              private router: Router) {
    this.submitted = loginService.isAuthenticated$.pipe(map((res) => res.loaded && !!res.payload));
  }

  onSubmit = (username: string, password: string): void => this.loginService.signIn(username, password)
}
