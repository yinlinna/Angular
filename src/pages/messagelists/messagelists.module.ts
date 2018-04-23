import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagelistsPage } from './messagelists';

@NgModule({
  declarations: [
    MessagelistsPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagelistsPage),
  ],
})
export class MessagelistsPageModule {}
