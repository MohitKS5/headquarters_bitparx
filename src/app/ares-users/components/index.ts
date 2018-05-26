import {LoginComponent} from './login';
import {SignupComponent} from './signup';
import {DashboardComponent} from './dashboard';
import {ProfileComponent} from './profile';
import {NavbarComponent} from './navbar';
import {UsersComponent} from './users';

export const components: any[] = [
  LoginComponent,
  DashboardComponent,
  ProfileComponent,
  NavbarComponent,
  SignupComponent,
  UsersComponent
];

export * from './navbar';
export * from './signup';
export * from './dashboard';
export * from './profile';
export * from './login';
export * from './users';

