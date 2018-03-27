import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-xlmsell',
  templateUrl: './xlmsell.component.html',
  styleUrls: ['./xlmsell.component.css']
})
export class XlmsellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService ) {
    this.advService.getadvertisement('XLM',1).subscribe(result=>{
      this.sells = result;
    })
   }

  ngOnInit() {
  }

}
