import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the AboutlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutlist',
  templateUrl: 'aboutlist.html',
})
export class AboutlistPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutlistPage');
  }

  imgSrc;
// take(){
//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE
//   }
  
//   this.camera.getPicture(options).then((imageData) => {

//    let base64Image = 'data:image/jpeg;base64,' + imageData;
//    this.imgSrc=base64Image;
//   }, (err) => {
//    alert('error');
//   });
// }

back(){
  this.viewCtrl.dismiss();
}

}