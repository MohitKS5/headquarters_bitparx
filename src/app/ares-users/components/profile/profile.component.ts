import {Component, OnInit} from '@angular/core';
import {LoggedUserService} from '../../services';
import {LocalUser} from '../../models';
import {descriptions, Levels} from '../../data';
import {Observable} from 'rxjs';
import {Funcs} from '@utils';
import {catchError} from 'rxjs/internal/operators';

@Component({
  moduleId: module.id,
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  $localUser: Observable<LocalUser>;
  Alllevels: Array<string>;
  descriptions: any;
  indices: Array<number>;
  selectedVal: string;
  requested: boolean;

  constructor(private loginService: LoggedUserService, private functions: Funcs) {
  }

  levels = (user: LocalUser): Array<string> =>
    user.levelsRequested ? this.Alllevels.filter((val) => !user.levelsRequested.includes(val)) : this.Alllevels;

  ngOnInit(): void {
    this.indices = Array(this.levels.length).fill(0).map((x: any, i: number) => i);
    this.Alllevels = Object.keys(new Levels());
    this.descriptions = descriptions;
    this.$localUser = this.loginService.currentUser;

  }

  request = (): void => {
    // this.loginService.requestLevel(this.selectedVal).pipe(
    //   catchError((err) => this.functions.handleError(err.message))
    // ).subscribe(() => this.selectedVal = null);
  };
}
