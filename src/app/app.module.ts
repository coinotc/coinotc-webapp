import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BuyComponent } from './buy/buy.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdvComponent } from './adv/adv.component';
import { OrderComponent } from './order/order.component';
import { AdvertisementService } from './services/advertisement.service';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { OrderService } from './services/order.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BuyComponent,
    AdvComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AdvertisementService, UserService, ApiService, JwtService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
