import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanDeactivateGuard} from './deactivate.guard';

// Components
import {aresUsersRoutes} from './ares-users';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(aresUsersRoutes)
  ],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule {
}
