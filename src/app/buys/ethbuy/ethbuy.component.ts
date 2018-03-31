import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { ShowcontrolService } from '../../services/showcontrol.service'
@Component({
  selector: 'app-ethbuy',
  templateUrl: './ethbuy.component.html',
  styleUrls: ['./ethbuy.component.css']
})
export class EthbuyComponent implements OnInit {

  private buys : advertisement[]

  constructor(private advService :AdvService, private showcontrolSvc :ShowcontrolService) {
     this.advService.getadvertisement('ETH',0).subscribe(result=>{
       this.buys = result
     })
   }

  ngOnInit() {
  }

  showoff(){
    this.showcontrolSvc.toggleShowAndHideBuy(false);
    this.showcontrolSvc.toggleShowAndHideSell(false)
  }

}
