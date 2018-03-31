import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { Observable } from 'rxjs/Rx'
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  private sells : Observable<advertisement[]>

  constructor(private advService:AdvService,private showcontrolSvc :ShowcontrolService) {
    
    this.sells=this.advService.getTypeadvertisement(1)
   }

  ngOnInit() {
  }

  showoff(){
    this.showcontrolSvc.toggleShowAndHideBuy(false)
    this.showcontrolSvc.toggleShowAndHideSell(false)
  }


}
