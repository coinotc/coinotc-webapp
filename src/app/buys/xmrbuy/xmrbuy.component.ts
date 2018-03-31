import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-xmrbuy',
  templateUrl: './xmrbuy.component.html',
  styleUrls: ['./xmrbuy.component.css']
})
export class XmrbuyComponent implements OnInit {

  private buys : advertisement[];

  constructor(private advService:AdvService,private showcontrolService:ShowcontrolService) {
    this.advService.getadvertisement('XML',0).subscribe(result=>{
      this.buys = result;
    })
   }

   showoff(){
    this.showcontrolService.toggleShowAndHideBuy(false)
  }


  ngOnInit() {
  }

}
