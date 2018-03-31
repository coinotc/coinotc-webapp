import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderInformation } from '../../shared/orderinformation';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  tabs = [
    {
      name   : '进行中'
    },
    {
      name   : '已结束'
    }
  ];

 
orders:[1,2,3,4,5,6,7,8,9]


  constructor() { 
   
  }

  ngOnInit() {
   
  }

}
