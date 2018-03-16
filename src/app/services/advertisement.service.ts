import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { adinformation } from '../../shared/adinform';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AdvertisementService {

  private adbuy = environment.api_url + '/guanggao/buy';
  private adsell = environment.api_url + '/guanggao/sell';
  private advertisement = environment.api_url + '/advertisement';

  constructor(public http:HttpClient) { 
    console.log('Hello Ad')
  }

  public getadbuy(crypto){
    let url = `${this.adbuy}?crypto=${crypto}`
    console.log(url);
    return this.http.get<adinformation[]>(url, httpOptions);
  }
  public addadbuy(information){
    return this.http.post(this.adbuy, information, httpOptions);
  }
  public getadsell(crypto){
    let url = `${this.adsell}?crypto=${crypto}`
    console.log(url);
    return this.http.get<adinformation[]>(url, httpOptions);
  }
  public addadsell(information){
    return this.http.post(this.adsell, information, httpOptions);
  }
  public getprice(type,fiat){
    let url = `https://api.coinmarketcap.com/v1/ticker/${type}/?convert=${fiat}`;
    return this.http.get(url);
  }
}
