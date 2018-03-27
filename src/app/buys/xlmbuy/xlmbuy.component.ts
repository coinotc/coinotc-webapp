import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../services/adv.service';
import { advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-xlmbuy',
  templateUrl: './xlmbuy.component.html',
  styleUrls: ['./xlmbuy.component.css']
})
export class XlmbuyComponent implements OnInit {

  private buys : advertisement[];

  constructor(private advService:AdvService) { 
    this.advService.getadvertisement('XML',0).subscribe(result =>{
      this.buys = result;
    })

    }
  

  ngOnInit() {
  }

}
