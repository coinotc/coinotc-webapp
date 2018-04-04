import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.css']
})
export class UserVerificationComponent implements OnInit {

  verify:boolean = false;

  

  isVisible1 = false;
  isVisible2 = false;
  isVisible3 = false;

  isConfirmLoading = false;

  showModal1 =() => {
    this.isVisible1 = true;
  };

  showModal2 =() => {
    this.isVisible2 = true;
  };

  showModal3 =() => {
    this.isVisible3 = true;
  };

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible1 = false;
      this.isVisible2 = false;
      this.isVisible3 = false;
      this.isConfirmLoading = false;
    }, 800);
  };

  handleCancel = (e) => {
    this.isVisible1 = false;
    this.isVisible2 = false;
    this.isVisible3 = false;
  };


 
  countries = [
    { value: 'CN', label: '中国' },
    { value: 'USA', label: '美国' },
    { value: 'UK', label: '英国' },
    { value: 'SGP', label: '新加坡' }
  ];


  
  constructor() { }

  ngOnInit() {
  }

}
