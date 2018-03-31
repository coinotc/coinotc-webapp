import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-ethsell',
  templateUrl: './ethsell.component.html',
  styleUrls: ['./ethsell.component.css']
})
export class EthsellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService,private showcontrolSvc :ShowcontrolService ) {
    this.advService.getadvertisement('ETH',1).subscribe(result=>{
      this.sells = result;
    })
   }

  ngOnInit() {
  }

  showoff(){
    this.showcontrolSvc.toggleShowAndHideBuy(false)
    this.showcontrolSvc.toggleShowAndHideSell(false)
  }

}
