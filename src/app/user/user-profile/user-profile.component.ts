import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isVisible = false;
  isConfirmLoading = false;

  showModal = () => {
    this.isVisible = true;
  };

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 800);
  };

  handleCancel = (e) => {
    this.isVisible = false;
  };


  constructor() { }

  inputValue:string;

  ngOnInit() {
  }

}
