import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
//import { MePage } from '../me/me';
//import { MyPage } from '../my/my';
import {  LoadPage } from '../load/load'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab4Root = MessagePage;
  //tab5Root = MyPage;
  tab5Root =  LoadPage;
  constructor() {

  }
}
