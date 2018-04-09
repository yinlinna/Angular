import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController,public loadingCtrl: LoadingController) {
    menuCtrl.enable(true);

  }
  //login(){
    //this.navCtrl.push (LoginPage);
  //}
 

 
  doInfinite(infiniteScroll){
    console.log(infiniteScroll);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    setTimeout(() => {
      loading.dismiss();

    }, 5000);
    loading.present();
     infiniteScroll.complete();  
}

}
