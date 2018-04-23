import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutlistPage } from './aboutlist';

@NgModule({
  declarations: [
    AboutlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutlistPage),
  ],
})
export class AboutlistPageModule {}
