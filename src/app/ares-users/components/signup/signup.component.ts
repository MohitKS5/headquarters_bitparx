import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

import {LoggedUserService} from '../../services';

import {LocalUser} from '../../models';
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  submitted:Observable<boolean>;
  form: FormGroup;

  constructor(private loginService: LoggedUserService,
              private router: Router,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.submitted = loginService.isAuthenticated$.pipe(map((res) => res.loaded && !!res.payload));

    this.form = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      passwords: fb.group({
        password: ['', Validators.required],
        repeat: ['', Validators.required]
      }, {validator: this.areEqual})
    });
  }

  areEqual: ValidatorFn = (g: FormGroup) => {
    return g.get('password').value === g.get('repeat').value
      ? null : {'mismatch': true};
  };

  onSubmit = () => this.loginService.signUp(this.form.value.name, this.form.value.passwords.password)

}
