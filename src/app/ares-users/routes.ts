import {LevelGuard, LocalUserGuard, LoggedInGuard} from './guards/auth.guard';
import {Routes} from '@angular/router';
import * as component from './components';
import {SynchronicityComponent} from '../roadtrips/components/synchronicity/synchronicity.component';

export const aresUsersRoutes: Routes = [
  {path: 'dashboard', component: component.DashboardComponent,
    canActivate: [LocalUserGuard]
  },
  {path: 'login', component: component.LoginComponent, canActivate: [LoggedInGuard]},
  {path: 'profile', component: component.ProfileComponent, canActivate: [LocalUserGuard]},
  {path: 'signup', component: component.SignupComponent, canActivate: [LoggedInGuard]},
  {path: 'users', component: component.UsersComponent, canActivate: [LevelGuard], data: {level: 'admin'}},
  {path: 'roadtrips', component: SynchronicityComponent, canActivate: [LevelGuard], data: {level: 'synchronicity'}},
];
