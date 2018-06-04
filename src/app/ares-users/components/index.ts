import {LoginComponent} from './login';
import {SignupComponent} from './signup';
import {DashboardComponent} from './dashboard';
import {ProfileComponent} from './profile';
import {NavbarComponent} from './navbar';
import {ActiveUsersComponent} from './active-users/active-users.component';
import {UserLevelsComponent} from './user-levels';

export const components: any[] = [
  LoginComponent,
  DashboardComponent,
  ProfileComponent,
  NavbarComponent,
  SignupComponent,
  ActiveUsersComponent,
  UserLevelsComponent,

];

export * from './navbar';
export * from './signup';
export * from './dashboard';
export * from './profile';
export * from './login';
export * from './active-users';
export * from './user-levels';
export * from './active-sessions';

