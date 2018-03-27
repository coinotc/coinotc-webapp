import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
@Component({
  selector: 'app-xmrbuy',
  templateUrl: './xmrbuy.component.html',
  styleUrls: ['./xmrbuy.component.css']
})
export class XmrbuyComponent implements OnInit {

  private buys : advertisement[];

  constructor(private advService:AdvService) {
    this.advService.getadvertisement('XML',0).subscribe(result=>{
      this.buys = result;
    })
   }

  ngOnInit() {
  }

}
