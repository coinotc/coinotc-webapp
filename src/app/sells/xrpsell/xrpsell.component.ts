import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-xrpsell',
  templateUrl: './xrpsell.component.html',
  styleUrls: ['./xrpsell.component.css']
})
export class XrpsellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService ) {
    this.advService.getadvertisement('XRP',1).subscribe(result=>{
      this.sells = result;
    })
   }

  ngOnInit() {
  }

}
