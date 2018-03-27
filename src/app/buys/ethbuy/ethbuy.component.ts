import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service'
import { advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-ethbuy',
  templateUrl: './ethbuy.component.html',
  styleUrls: ['./ethbuy.component.css']
})
export class EthbuyComponent implements OnInit {

  private buys : advertisement[]

  constructor(private advService :AdvService) {
     this.advService.getadvertisement('ETH',0).subscribe(result=>{
       this.buys = result
     })
   }

  ngOnInit() {
  }

}
