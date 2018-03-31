import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-xmrsell',
  templateUrl: './xmrsell.component.html',
  styleUrls: ['./xmrsell.component.css']
})
export class XmrsellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService,private showcontrolSvc :ShowcontrolService ) {
    this.advService.getadvertisement('XMR',1).subscribe(result=>{
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
