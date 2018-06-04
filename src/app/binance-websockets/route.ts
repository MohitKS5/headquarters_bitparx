import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TradeStreamsComponent} from './components/trade-streams/trade-streams.component';

const Binanceroutes: Routes = [
  {path: '', component: TradeStreamsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(Binanceroutes)
  ],
  exports: [RouterModule],
})
export class BinanceRoutingModule {
}
