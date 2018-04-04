import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { Observable } from 'rxjs/Rx';
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-xrpbuy',
  templateUrl: './xrpbuy.component.html',
  styleUrls: ['./xrpbuy.component.css']
})
export class XrpbuyComponent implements OnInit {

  private buys : Observable<advertisement[]>

  constructor(private advService:AdvService,private showcontrolService:ShowcontrolService) {
    this.buys = this.advService.getadvertisement('XRP',0)
   }

  ngOnInit() {
  }

  showoff(){
    this.showcontrolService.toggleShowAndHideBuy(false)
  }


}
