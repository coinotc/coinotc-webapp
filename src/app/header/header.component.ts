import { Component, OnInit } from '@angular/core';
import { ShowcontrolService } from '../services/showcontrol.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 

  showBuy: boolean;
  showSell: boolean;

  constructor(private showcontrolService:ShowcontrolService) { 
    showcontrolService.cryptoTogleMenuBuy$.subscribe(
      flagshowhide => {
        
        this.showBuy = flagshowhide;
      });

    this.showcontrolService.cryptoTogleMenuSell$.subscribe(
      show =>{
        this.showSell = show;
      }
    )
  }

  showonBuy() {
    this.showcontrolService.toggleShowAndHideBuy(true)
    // this.showBuy = true
    this.showcontrolService.toggleShowAndHideSell(false)
  }

  showonSell() {
    this.showcontrolService.toggleShowAndHideBuy(false)
    this.showcontrolService.toggleShowAndHideSell(true)
  }

  showoff(){
    this.showcontrolService.toggleShowAndHideBuy(false)
    this.showcontrolService.toggleShowAndHideSell(false)
  }
  

  /*
  showoff() {
    this.showBuy = false;
    this.showSell = false;
  }*/


  ngOnInit() {
  }

}
