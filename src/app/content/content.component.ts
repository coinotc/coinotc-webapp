import { Component, OnInit } from '@angular/core';
import { advertisement } from '../models/advertisement';
import { AdvService } from '../services/adv.service';
// import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  // ]
  array = [ 1 ];

 

  
  

  private models : advertisement[]
  
  
  
  constructor(private advservice:AdvService) {
    this.advservice.getadvertisement('ETH',0).subscribe(result=>{
      this.models = result
    })
   }

  ngOnInit() {
    setTimeout(_ => {
      this.array = [ 1, 2, 3, 4 ];
    }, 500);
  }
  
}