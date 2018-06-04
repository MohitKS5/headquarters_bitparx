import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanDeactivateGuard} from './deactivate.guard';

// Components
import {aresUsersRoutes} from './ares-users';
import {TradeStreamsComponent} from './binance-websockets/components/trade-streams';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'trade', component: TradeStreamsComponent}
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
