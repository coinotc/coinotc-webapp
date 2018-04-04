import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'


@Injectable()
export class InformationService {

  private showInformationSource = new Subject<string>()

  showInformation$ = this.showInformationSource.asObservable();


  constructor() { }

  information(order:string){
    this.showInformationSource.next(order)
  }

}
