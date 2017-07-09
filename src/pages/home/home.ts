import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  msgList: {userId: number, toUserId: number, userName: string, message: string}[] = [];
  editorMsg: any;
  userId: number = 1;
  toUserId: number = 2;

  constructor(public navCtrl: NavController) {

  }

  sendMsg(){
    this.msgList.push({userId : 1, toUserId : 2, userName : "Mitchel", message : "Hey mitch"});
    console.log(this.msgList);
  }

}
