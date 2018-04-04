import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { Observable } from 'rxjs/Rx'
import { ShowcontrolService } from '../../services/showcontrol.service'
// import { InformationService } from '../../services/information.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {


 private buys:advertisement[];



  constructor(private advservice:AdvService,private showcontrolSvc :ShowcontrolService) {
  //  this.advservice.getadvertisement("ETH",1).subscribe(result=>{
  //    this.buys = result
  //  })



  this.advservice.getTypeadvertisement(0).subscribe(result=>{
    this.buys = result
  })


  
   }
   
   showoff(buy){
    this.showcontrolSvc.toggleShowAndHideBuy(false)
    this.showcontrolSvc.toggleShowAndHideSell(false)

  }



  ngOnInit() {
    }

   

}
