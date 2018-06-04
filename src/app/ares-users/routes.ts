import {LevelGuard, LocalUserGuard, LoggedInGuard} from './guards/auth.guard';
import {Routes} from '@angular/router';
import * as component from './components';
import * as common from '../common';
import {dashboardMenuTreeData} from './data/dasboardmenu';

export const aresUsersRoutes: Routes = [
  {
    path: 'dashboard',
    component: component.DashboardComponent,
    canActivate: [LocalUserGuard]
  },
  {
    path: 'login',
    component: component.LoginComponent, canActivate: [LoggedInGuard]
  },
  {
    path: 'profile',
    component: component.ProfileComponent,
    canActivate: [LocalUserGuard]
  },
  {
    path: 'signup',
    component: component.SignupComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'navbar-sidenav',
    component: common.NavbarSidenavTree,
    canActivate: [LocalUserGuard, LevelGuard],
    data: {
      level: 'Admin',
      menu: dashboardMenuTreeData,
      title: 'Admin Side Users'
    },
    children: [
      {
        path: '',
        component: component.UserLevelsComponent,
        canActivate: [LocalUserGuard, LevelGuard],
        data: {level: 'Admin'}
      },
      {
        path: 'users_levels',
        component: component.UserLevelsComponent,
        canActivate: [LocalUserGuard, LevelGuard],
        data: {level: 'Admin'}
      },
      {
        path: 'active_users',
        component: component.ActiveUsersComponent,
        canActivate: [LocalUserGuard, LevelGuard],
        data: {level: 'Admin'}
      },
      {
        path: 'active_sessions',
        component: component.ActiveSessionsComponent,
        canActivate: [LocalUserGuard, LevelGuard],
        data: {level: 'Admin'}
      }
    ]
  }
];
