import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MessagelistsPage} from '../messagelists/messagelists'



@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})

export class MessagePage{
  items=[];
  constructor(public nav:NavController) {
    this.items = [
      {
        'title': '我的电脑',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'18:09 pm'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'22:31 pm'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'12:31 am'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'09:31 am'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'07:25 am'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'12:31 pm'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'14:54 pm'
      },
      {
        'title': '刘昊然',
        'description': 'hello',
        'color': 'assets/imgs/tou1.jpg',
        'time':'11:31 am'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(MessagelistsPage, { item: item });
  }
}