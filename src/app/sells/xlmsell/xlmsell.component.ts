import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-xlmsell',
  templateUrl: './xlmsell.component.html',
  styleUrls: ['./xlmsell.component.css']
})
export class XlmsellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService,private showcontrolSvc :ShowcontrolService ) {
    this.advService.getadvertisement('XLM',1).subscribe(result=>{
      this.sells = result;
    })
   }

   showoff(){
    this.showcontrolSvc.toggleShowAndHideBuy(false)
    this.showcontrolSvc.toggleShowAndHideSell(false)
  }

  ngOnInit() {
  }

}
