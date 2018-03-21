import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { MyserviceService } from './services/myservice.service';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    InputComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyserviceService], //声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
