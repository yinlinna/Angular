import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {FormsModule} from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AboutlistPage } from '../pages/aboutlist/aboutlist';
import { MessagePage } from '../pages/message/message';
import { MessagelistsPage } from '../pages/messagelists/messagelists';
import { TabsPage } from '../pages/tabs/tabs';
import { LoadPage } from '../pages/load/load';
import { RegisterPage } from '../pages/register/register';
import { FindPage } from '../pages/find/find';
import { SetPage } from '../pages/set/set';
import { LoginPage } from '../pages/login/login';
//import { DengluPage } from '../pages/denglu/denglu'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AboutlistPage,
    HomePage,
    TabsPage,
    MessagePage,
    LoadPage,
    FindPage,
    RegisterPage,
    MessagelistsPage,
    SetPage,
    LoginPage
    //DengluPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true
    }),
    IonicPageModule.forChild(AboutPage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MessagePage,
    LoadPage,
    AboutlistPage,
    FindPage,
    MessagelistsPage,
    SetPage,
    LoginPage
    //DengluPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
