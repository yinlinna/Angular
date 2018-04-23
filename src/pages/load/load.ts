import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Details1Page } from '../../pages/details1/details1'
//import { Details2Page } from '../../pages/details2/details2'
import { SetPage  }  from '../../pages/set/set'
/**
 * Generated class for the LoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-load',
  templateUrl: 'load.html',
})
export class LoadPage {
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadPage');
  }

  openNavDetailsPage1(){
    //let profileModal = this.modalCtrl.create(Details1Page,{name:'我的发布'});
    //profileModal.present();
  }
  openNavDetailsPage2(){
   // let profileModal = this.modalCtrl.create(Details2Page,{name:'我的合作'});
    //profileModal.present();
  }
 openNavDetailsPage3(){
  let profileModal = this.modalCtrl.create(SetPage,{name:'设置'});
  profileModal.present();
 }
}