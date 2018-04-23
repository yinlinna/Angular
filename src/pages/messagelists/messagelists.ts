import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the MessagelistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagelists',
  templateUrl: 'messagelists.html',
})
export class MessagelistsPage {
  item;
  constructor(public viewCtrl: ViewController,public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
    this.item = params.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistsPage');
  }
  back(){
    this.viewCtrl.dismiss();
  }
}

