import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderInformation } from '../../shared/orderinformation';
import { OrderService } from '../services/order.service'
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  tabs = [
    {
      name   : '正在买'
    },
    {
      name   : '正在卖'
    },
    {
      name   : '已买'
    },
    {
      name   : '已卖'
    }
  ];

  private buyerActiveOrders: OrderInformation[];
  private sellerActiveOrders: OrderInformation[];
  private buyerFinishedOrders: OrderInformation[];
  private sellerFinishedOrders: OrderInformation[];
  private user;

  private order: Observable<any>;


  constructor(private orderServiceProvider: OrderService, private userService:UserService) { 
    this.user = this.userService.getCurrentUser();
  }

  ngOnInit() {
   
  }

}
