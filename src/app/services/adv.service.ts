import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { advertisement } from '../models/advertisement';
import { environment } from '../../../environment/environment';

// import { Observable } from 'rxjs/Rx'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class AdvService {

  private advertisementurl = environment.api_url + '/advertisement';

  constructor(public http: HttpClient) { }


  public addadvertisement(m){
    return this.http.post(this.advertisementurl,m,httpOptions);
  }

  public getadvertisement(crypto, type){
    let url = `${this.advertisementurl}?crypto=${crypto}&type=${type}`
    return this.http.get<advertisement[]>(url,httpOptions)
  }
 
  public getTypeadvertisement(type){
    let url1 = `${this.advertisementurl+'/type'}?type=${type}`
    return this.http.get<advertisement[]>(url1,httpOptions)
  }


 
 

  

  public getprice(type,fiat){
    let url = `https://api.coinmarketcap.com/v1/ticker/${type}/?convert=${fiat}`;
    return this.http.get(url);
  }

 

}
