//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {RegisterPage} from '../register/register'
import { TabsPage } from '../../pages/tabs/tabs'
import { FindPage } from '../../pages/find/find'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }
  back(){
    let profileModal = this.modalCtrl.create(TabsPage);
    profileModal.present();
  }
  register(){
    let profileModal = this.modalCtrl.create(RegisterPage);
    profileModal.present();
  }
  find(){
    let profileModal = this.modalCtrl.create(FindPage);
    profileModal.present();    
  }
}


