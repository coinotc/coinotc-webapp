import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  msg1="基本信息";
  msg2="身份验证";
  msg3="安全设置";
  msg4="信任您的人";
  msg5="您信任的人";
  msg6="您屏蔽的人";


  constructor() { }

  ngOnInit() {
  }

}
