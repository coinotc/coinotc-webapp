import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ContentComponent } from '../app/content/content.component'
import { BuyComponent } from '../app/buys/buy/buy.component';
import { AdvComponent } from '../app/adv/adv.component';
import { OrderComponent } from '../app/order/order.component';
import { EthbuyComponent } from '../app/buys/ethbuy/ethbuy.component';
import { XrpbuyComponent } from './buys/xrpbuy/xrpbuy.component';
import { XmrbuyComponent } from './buys/xmrbuy/xmrbuy.component';
import { XlmbuyComponent } from './buys/xlmbuy/xlmbuy.component';
import { AdabuyComponent } from './buys/adabuy/adabuy.component';
import { SellComponent } from '../app/sells/sell/sell.component';
import { XrpsellComponent } from './sells/xrpsell/xrpsell.component';
import { XmrsellComponent } from './sells/xmrsell/xmrsell.component';
import { XlmsellComponent } from './sells/xlmsell/xlmsell.component';
import { EthsellComponent } from './sells/ethsell/ethsell.component';
import { AdasellComponent} from './sells/adasell/adasell.component';
import { HomeComponent } from './order/home/home.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
  },

  {
    path: 'buy', component: BuyComponent,
  },
  {
    path: 'sell', component: SellComponent,
  },
  {
    path: 'adv',component:AdvComponent,
  },
  {
    path: 'order',component:OrderComponent,
  },
  {
    path: 'wallet',component:OrderComponent,
  },
  {
    path: 'user',component:OrderComponent,
  },
  {
    path: 'ETHBuy',component:EthbuyComponent,
  },
 {
   path:'XRPBuy',component:XrpbuyComponent,
 },
 {
   path:'XMRBuy',component:XmrbuyComponent,
 },
 {
   path:'XLMBuy',component:XlmbuyComponent,
 },
 {
   path:'ADABuy',component:AdabuyComponent,
 },
 {
  path:'ADASell',component:AdasellComponent,
},
{
  path:'ETHSell',component:EthsellComponent,
},
{
  path:'XMRSell',component:XmrsellComponent,
},
{
  path:'XLMSell',component:XlmsellComponent,
},
{
  path:'XRPSell',component:XrpsellComponent,
},
{
  path:'orderhome',component:HomeComponent,
}

  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
