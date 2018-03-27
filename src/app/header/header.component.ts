import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  coinstyle1: string = "ETH";
  coinstyle2: string = "XRP";
  coinstyle3: string = "XMR";
  coinstyle4: string = "XLM";
  coinstyle5: string = "ADA";



  constructor() { }

  showBuy: boolean = false;
  showSell: boolean = false;

  showonBuy() {
    this.showBuy = true;
    this.showSell = false;
  }

  showonSell() {
    this.showSell = true;
    this.showBuy = false;
  }

  // close() {
  //   this.showSell = false;
  //   this.showBuy = false;
  // }

  showoff() {
    this.showBuy = false;
    this.showSell = false;
  }


  ngOnInit() {
  }

}
