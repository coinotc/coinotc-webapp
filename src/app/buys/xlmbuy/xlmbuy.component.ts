import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service';
import { advertisement } from '../../models/advertisement'
import { ShowcontrolService } from '../../services/showcontrol.service'

@Component({
  selector: 'app-xlmbuy',
  templateUrl: './xlmbuy.component.html',
  styleUrls: ['./xlmbuy.component.css']
})
export class XlmbuyComponent implements OnInit {

  private buys : advertisement[];

  constructor(private advService:AdvService,private showcontrolService:ShowcontrolService) { 
    this.advService.getadvertisement('XLM',0).subscribe(result =>{
      this.buys = result;
    })

    }

    showoff(){
      this.showcontrolService.toggleShowAndHideBuy(false)
    }
 
  

  ngOnInit() {
  }

}
