import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdvService } from '../app/services/adv.service'
import { ShowcontrolService } from '../app/services/showcontrol.service'
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
import { InformationComponent } from './information/information.component';
import { UserComponent } from './user/user.component';
import { MyAdvertisementComponent } from './my-advertisement/my-advertisement.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserVerificationComponent } from './user/user-verification/user-verification.component';
import { AccountOptionsComponent } from './user/account-options/account-options.component';
import { UserTrustedComponent } from './user/user-trusted/user-trusted.component';
import { UserTrustingComponent } from './user/user-trusting/user-trusting.component';
import { UserBlockingComponent } from './user/user-blocking/user-blocking.component';
import { AdBuyComponent } from './my-advertisement/ad-buy/ad-buy.component';
import { AdSellComponent } from './my-advertisement/ad-sell/ad-sell.component';
import { CryptocontrolService } from './services/cryptocontrol.service';






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
    InformationComponent,
    UserComponent,
    MyAdvertisementComponent,
    UserProfileComponent,
    UserVerificationComponent,
    AccountOptionsComponent,
    UserTrustedComponent,
    UserTrustingComponent,
    UserBlockingComponent,
    AdBuyComponent,
    AdSellComponent,
    
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
  providers: [AdvService,ShowcontrolService, CryptocontrolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
