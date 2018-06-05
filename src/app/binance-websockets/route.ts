import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TradeStreamsComponent} from './components/trade-streams/trade-streams.component';
import {NavbarSidenavTree} from '../common/navbar-sidenav';
import {tradeMenuTreeData} from './data/menu-tree';

const Binanceroutes: Routes = [
  {
    path: 'trade', component: NavbarSidenavTree, data: {level: 'member', menu: tradeMenuTreeData, title: 'The Market'},children: [
      {path: '', component: TradeStreamsComponent}
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
