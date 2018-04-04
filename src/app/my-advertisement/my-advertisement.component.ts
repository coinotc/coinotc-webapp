import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-advertisement',
  templateUrl: './my-advertisement.component.html',
  styleUrls: ['./my-advertisement.component.css']
})
export class MyAdvertisementComponent implements OnInit {

  msg1 = "ETH"
  msg2 = "XRP"
  msg3 = "XMR"
  msg4 = "XLM"
  msg5 = "ADA"

  constructor() { }

  ngOnInit() {
  }

}
