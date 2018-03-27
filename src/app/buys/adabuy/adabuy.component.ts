import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service';
import { advertisement } from '../../models/advertisement';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-adabuy',
  templateUrl: './adabuy.component.html',
  styleUrls: ['./adabuy.component.css']
})
export class AdabuyComponent implements OnInit {

private adabuys :Observable<advertisement[]>

  constructor(private advService:AdvService) {
    this.adabuys=this.advService.getadvertisement('ADA',0)
   }

  ngOnInit() {
  }

}
