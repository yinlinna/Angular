import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the Details1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details1',
  templateUrl: 'details1.html',
})
export class Details1Page {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }


  items=[{
    name:'地区：北京',
    origin:'银行',
    namelist:'资产包转让',
    moneyName:'资金',
    money:'100万'
  },
  {name:'地区：北京',
  origin:'类型：借贷',namelist:'委外催收',    moneyName:'合购金额',
  money:'500万'},
  {name:'地区：北京',
  origin:'买方性质：国企',namelist:'商业保理',    moneyName:'资金',
  money:'500万'}];

  back(){
    this.viewCtrl.dismiss();
  }
}
