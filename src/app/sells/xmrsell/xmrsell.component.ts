import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-xmrsell',
  templateUrl: './xmrsell.component.html',
  styleUrls: ['./xmrsell.component.css']
})
export class XmrsellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService ) {
    this.advService.getadvertisement('XMR',1).subscribe(result=>{
      this.sells = result;
    })
   }

  ngOnInit() {
  }

}
