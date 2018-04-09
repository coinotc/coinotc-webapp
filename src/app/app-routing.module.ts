import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ContentComponent } from '../app/content/content.component'
import { BuyComponent } from '../app/buys/buy/buy.component';
import { AdvComponent } from '../app/adv/adv.component';
import { OrderComponent } from '../app/order/order.component';
import { UserComponent } from './user/user.component';
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
import { InformationComponent } from './information/information.component';
import { MyAdvertisementComponent } from './my-advertisement/my-advertisement.component';
import { UserBlockingComponent } from './user/user-blocking/user-blocking.component';
import { AccountOptionsComponent } from './user/account-options/account-options.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserTrustedComponent } from './user/user-trusted/user-trusted.component';
import { UserTrustingComponent } from './user/user-trusting/user-trusting.component';
import { UserVerificationComponent } from './user/user-verification/user-verification.component';
import { AdBuyComponent } from './my-advertisement/ad-buy/ad-buy.component';
import { AdSellComponent } from './my-advertisement/ad-sell/ad-sell.component'
import { LoginComponent } from './login/login.component'




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
    path: 'user',component:UserComponent,
    children:[
      {
        path:'accountOption',component:AccountOptionsComponent,
      },
      {
        path:'userTrusted',component:UserTrustedComponent,
      },
      {
        path:'userTrusting',component:UserTrustingComponent,
      },
      {
        path:'userBlocking',component:UserBlockingComponent,
      },
      {
        path:'userProfile',component:UserProfileComponent,
      },
      {
        path:'userVerification',component:UserVerificationComponent,
      }
    ]
    
  },
  {
    path:'myadv',component:MyAdvertisementComponent,
    children:[
      {
        path:'adbuy',component:AdBuyComponent
      },
      {
        path:'adsell',component:AdSellComponent
      }
    ]
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
},
{
  path:'information',component:InformationComponent,
},
{
  path:'orderhome',component:HomeComponent,
},
{
  path:'login',component:LoginComponent,
},

];







@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
