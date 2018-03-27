import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  // @Input()buy: advertisement[];

  

 private buys:advertisement[];

  constructor(private advservice:AdvService ) {
  //  this.advservice.getadvertisement("ETH",1).subscribe(result=>{
  //    this.buys = result
  //  })


  this.advservice.getTypeadvertisement(0).subscribe(result=>{
    this.buys = result
  })


  // this.advservice.getadvertisement('',0).subscribe(result=>{
  //   this.buys = result;
  // })
   }
   
   

 

  ngOnInit() {
    
    
  }

}
