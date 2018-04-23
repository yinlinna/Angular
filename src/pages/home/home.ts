import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides,MenuController } from 'ionic-angular';
import { NgSwitch } from '@angular/common';
import { Directive } from '@angular/core';
import { LoginPage }  from '../../pages/login/login';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Directive({ selector: '[ngSwitch]' })
export class HomePage {
  activeMenu : string;
  @ViewChild(Slides) slides: Slides;
  ngSwitch : any;
  constructor(public navCtrl: NavController,
    public menu:MenuController,
    public platform:Platform,
    public appCtrl:App,
    public toastCtrl:ToastController,
    public modalCtrl:ModalController,
    public statusBar: StatusBar
  ) {
    this.statusBar.backgroundColorByHexString('#ff0000');
  }
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.registerBackButtonAction(null);
    });
  }
  backButtonPressed: boolean = false;
  //注册方法
  registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNav()[0];
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
  }
  //退出应用方法
  showExit() {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'middle'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
  }
  appType = 'Paid';

  apps: any = {
    'Paid': [
      {
        name: '资产包转让',
        price: '../../assets/imgs/transform.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform1.png'
      },
      {
        name: '资产包转让',
        price: '../../assets/imgs/transform2.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform3.png'
      },
      {
        name: '资产包转让',
        price: '../../assets/imgs/transform1.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform2.png'
      }, {
        name: '资产包转让',
        price: '../../assets/imgs/transform.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform1.png'
      }
      ,
      {
        name: '资产包转让',
        price: '../../assets/imgs/transform1.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform2.png'
      }, {
        name: '资产包转让',
        price: '../../assets/imgs/transform.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform1.png'
      }
    ],
    'Free': [
      
      {
        name: '资产包转让',
        price: '../../assets/imgs/transform.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform1.png'
      },
      {
        name: '资产包转让',
        price: '../../assets/imgs/transform.png'
      },
      {
        name: '债权转让',
        price: '../../assets/imgs/transform1.png'
      }
      
    ],

  };

  getItems(type:any){
    return this.apps[type];
   
  }
  title = 'Angular 4.x NgSwitch';
  private num = 0;
  changeElement(): void {
    if (this.num > 3) {
      this.num = 0;
    }
    this.num++;
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i <3; i++) {
        this.items.push({name:'地区：北京',origin:'类型：借贷',namelist:'融资借贷',    moneyName:'个人、企业',
        money:'求购方'},
        {name:'地区：北京',origin:'买方性质：国企',namelist:'尽职调查',    moneyName:'资金',
        money:'100万'},
        {name:'地区：北京',origin:'买方性质：国企',namelist:'资产求购',    moneyName:'转让价',
        money:'100万'});
      }

      
      infiniteScroll.complete();
      if(this.items.length>=9){
        console.log(this.items.length);
        infiniteScroll.enable(false);
      }
    }, 1000);
  }
}
