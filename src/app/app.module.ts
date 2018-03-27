import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdvService } from '../app/services/adv.service'
// import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BuyComponent } from './buys/buy/buy.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdvComponent } from './adv/adv.component';
import { OrderComponent } from './order/order.component';
import { EthbuyComponent } from './buys/ethbuy/ethbuy.component';
import { XrpbuyComponent } from './buys/xrpbuy/xrpbuy.component';
import { XmrbuyComponent } from './buys/xmrbuy/xmrbuy.component';
import { XlmbuyComponent } from './buys/xlmbuy/xlmbuy.component';
import { AdabuyComponent } from './buys/adabuy/adabuy.component';
import { EthsellComponent } from './sells/ethsell/ethsell.component';
import { XrpsellComponent } from './sells/xrpsell/xrpsell.component';
import { XmrsellComponent } from './sells/xmrsell/xmrsell.component';
import { XlmsellComponent } from './sells/xlmsell/xlmsell.component';
import { AdasellComponent } from './sells/adasell/adasell.component';
import { SellComponent } from './sells/sell/sell.component';
import { HomeComponent } from './order/home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BuyComponent,
    AdvComponent,
    OrderComponent,
    EthbuyComponent,
    XrpbuyComponent,
    XmrbuyComponent,
    XlmbuyComponent,
    AdabuyComponent,
    EthsellComponent,
    XrpsellComponent,
    XmrsellComponent,
    XlmsellComponent,
    AdasellComponent,
    SellComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    // CarouselModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AdvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
