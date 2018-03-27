import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-adasell',
  templateUrl: './adasell.component.html',
  styleUrls: ['./adasell.component.css']
})
export class AdasellComponent implements OnInit {

  private sells : advertisement[];

  constructor(private advService:AdvService ) {
    this.advService.getadvertisement('ADA',1).subscribe(result=>{
      this.sells = result;
    })
   }

  ngOnInit() {
  }

}
