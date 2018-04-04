import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css']
})
export class AccountOptionsComponent implements OnInit {


  isVisible1 = false;
  isVisible2 = false;
  isVisible3 = false;
  isVisible4 = false;
  isConfirmLoading = false;

  coinPassword = () => {
    this.isVisible1 = true;
  };
  email = () => {
    this.isVisible2 = true;
  };
  phone = () => {
    this.isVisible3 = true;
  };
  login = () => {
    this.isVisible4 = true;
  };

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible1 = false;
      this.isVisible2 = false;
      this.isVisible3 = false;
      this.isVisible4 = false;
      this.isConfirmLoading = false;
    }, 800);
  };

  handleCancel = (e) => {
    this.isVisible1 = false;
    this.isVisible2 = false;
    this.isVisible3 = false;
    this.isVisible4 = false;
  };


  constructor() { }

  ngOnInit() {
  }

}
