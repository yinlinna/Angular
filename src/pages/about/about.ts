import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutlistPage } from '../aboutlist/aboutlist'
import { ModalController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
list=['资产包转让','债权转让','固产转让','典当担保','融资借贷','悬赏信息','商业保理','尽职调查','资产求购','委外催收','法律服务'];

push(){
  let profileModal = this.modalCtrl.create(AboutlistPage);
  profileModal.present();
}
}
