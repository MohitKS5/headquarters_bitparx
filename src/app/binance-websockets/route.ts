import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TradeStreamsComponent} from './components/trade-streams/trade-streams.component';
import {NavbarSidenavTree} from '../common/navbar-sidenav';
import {tradeMenuTreeData} from './data/menu-tree';
import {LocalUserGuard} from '../ares-users/guards';

const Binanceroutes: Routes = [
  {
    path: 'trade', component: NavbarSidenavTree, canActivate: [LocalUserGuard],
    data: {level: 'member', menu: tradeMenuTreeData, title: 'The Market'},children: [
      {path: '', component: TradeStreamsComponent, canActivate: [LocalUserGuard]}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(Binanceroutes)
  ],
  exports: [RouterModule],
})
export class BinanceRoutingModule {
}
