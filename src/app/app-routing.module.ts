import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ContentComponent } from '../app/content/content.component'
import { BuyComponent } from '../app/buy/buy.component';
import { AdvComponent } from '../app/adv/adv.component';
import { OrderComponent } from '../app/order/order.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
  },

  {
    path: 'buy', component: BuyComponent,
  },
  {
    path: 'sell', component: BuyComponent,
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
    path:'buy',component:BuyComponent,
    children:[
      {
        path:'Ethereum',component:BuyComponent,
      },
      {
        path:'MONERO',component:BuyComponent,
      },
      {
        path:'RIPPLE',component:BuyComponent,
      },
      {
        path:'STELLAR',component:BuyComponent,
      },
      {
        path:'CARDANO',component:BuyComponent,
      }
    ]
  },
  {
    path:'sell',component:BuyComponent,
    children:[
      {
        path:'Ethereum',component:BuyComponent,
      },
      {
        path:'MONERO',component:BuyComponent,
      },
      {
        path:'RIPPLE',component:BuyComponent,
      },
      {
        path:'STELLAR',component:BuyComponent,
      },
      {
        path:'CARDANO',component:BuyComponent,
      }
    ]
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
