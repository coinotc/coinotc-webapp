import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';



@Injectable()
export class ShowcontrolService {
  
//创建一个subject,这个subject是个boolean
  private showCryptoMenuBuy = new Subject<boolean>();
  private showCryptoMenuSell = new Subject<boolean>()

//把这个subject以Observable的形式传，同样以Observable的方式接
//Observable是个传输和拉取数据的通道，只有以Observable的形式出现，才可以被订阅。
  cryptoTogleMenuBuy$ = this.showCryptoMenuBuy.asObservable();
  cryptoTogleMenuSell$ = this.showCryptoMenuSell.asObservable();

  constructor() { }

  toggleShowAndHideBuy(show: boolean) {
    this.showCryptoMenuBuy.next(show);
  }

  toggleShowAndHideSell(show:boolean){
    this.showCryptoMenuSell.next(show)
  }

}
