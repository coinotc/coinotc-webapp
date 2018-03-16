import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service'
import { adinformation } from '../../shared/adinform';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent implements OnInit {

  information = new adinformation('', true, 'ETHEREUM', 'singapore', 'SGD', null, null, null, '', null, '');
  cryptoprice: number;
  

  constructor(
    private adservice: AdvertisementService,
    private userservice: UserService
  ) {
    this.adservice.getprice('Ethereum', 'SGD').subscribe(result => {
      this.cryptoprice = Number(result[0].price_sgd);
      this.information.price = this.cryptoprice;
    });
  }

  getcryptoprice(){
    switch (this.information.crypto) {
      case 'ETH':
      this.getfiatprice('Ethereum');
      break;
      case 'MONERO':
      this.getfiatprice('MONERO');
      break;
      case 'RIPPLE':
      this.getfiatprice('RIPPLE');
      break;
      case 'STELLAR':
      this.getfiatprice('STELLAR');
      break;
      case 'CARDANO':
      this.getfiatprice('CARDANO');
      break;

    }
  }

  getfiatprice(crypto) {
    switch (this.information.fiat) {
      case 'SGD':
        this.adservice.getprice(crypto, 'SGD').subscribe(result => {
          this.cryptoprice = Number(result[0].price_sgd);
        
        })
        break;
      case 'CNY':
        this.adservice.getprice(crypto, 'CNY').subscribe(result => {
          this.cryptoprice = Number(result[0].price_cny);
     
        })
        break;
      case 'USD':
        this.adservice.getprice(crypto, 'USD').subscribe(result => {
          this.cryptoprice = Number(result[0].price_usd);
       
        })
        break;
      case 'KRW':
        this.adservice.getprice(crypto, 'KRW').subscribe(result => {
          this.cryptoprice = Number(result[0].price_krw);
    
        })
        break;
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddadvertisementPage');
  }
  addbuyad() {
    this.information.owner = this.userservice.getCurrentUser().username;
    this.adservice.addadbuy(this.information).subscribe(result => {
      console.log(result);
     
    });
  }
  addsellad() {
    this.information.owner = this.userservice.getCurrentUser().username;
    this.adservice.addadsell(this.information).subscribe(result => {
      console.log(result);
     
    });
  }

  ngOnInit() {

  }

}
