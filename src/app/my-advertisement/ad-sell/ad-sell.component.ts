import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-sell',
  templateUrl: './ad-sell.component.html',
  styleUrls: ['./ad-sell.component.css']
})
export class AdSellComponent implements OnInit {

  tabs = [
    {
      name   : '进行中'
    },
    {
      name   : '已结束'
    }
  ];

 
orders:[1,2,3,4,5,6,7,8,9]


  constructor() { }

  ngOnInit() {
  }

}
