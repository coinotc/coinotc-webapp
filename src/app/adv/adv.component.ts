import { Component, OnInit } from '@angular/core';
import { AdvService } from '../services/adv.service';
import { advertisement } from '../models/advertisement'
import { Observable } from 'rxjs/Rx'


// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent implements OnInit {

 
  constructor(   private advservice: AdvService ) {
   
  }

  // private advertisement: Observable<advertisement[]>;
  advertisement = new advertisement('xjy', true, '', '', '', null, null, null, '', null, '',null)



  countries = [
    { value: 'CN', label: '中国' },
    { value: 'USA', label: '美国' },
    { value: 'UK', label: '英国' },
    { value: 'SGP', label: '新加坡' }
  ];


  cryptos = [
    { value: 'ETH', label: 'ETH' },
    { value: 'XRP', label: 'XRP' },
    { value: 'XMR', label: 'XMR' },
    { value: 'XLM', label: 'XLM' },
    { value: 'ADA', label: 'ADA' }
  ];
 
  fiats = [
    { value: 'CN', label: '人民币' },
    { value: 'USA', label: '美元' },
    { value: 'UK', label: '英镑' },
    { value: 'SGP', label: '新币' }
    ];

    payments = [
      { value: 'ZFB', label: '支付宝' },
      { value: 'WX', label: '微信' },
      { value: 'bank', label: '银行' }
      
    ];

   

    addadvertisement(){
      console.log(this.advertisement)
      this.advservice.addadvertisement(this.advertisement).subscribe(result=>{
        console.log(result);
      })
    }

  ngOnInit() {

  }

}
