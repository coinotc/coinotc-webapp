import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  name:string;
  age:number;
  address:string[];
  hobby:string[];

  constructor() { }

  ngOnInit() {
    
    
  }

}
