import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'
import { Observable } from 'rxjs/Rx'


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  private sells : Observable<advertisement[]>

  constructor(private advService:AdvService) {
    
    this.sells=this.advService.getTypeadvertisement(1)
   }

  ngOnInit() {
  }

}
