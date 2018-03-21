import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

import { MyserviceService } from '../../services/myservice.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  //myservice = new MyserviceService(); //实例化一个类
  constructor(public getdata:MyserviceService) {

   }
   @Input() arrData:Array<any>;
   @Output() getIndex = new EventEmitter();
   ngOnChanges(){
     console.log(0);
   }
   num:number;
ngOnInit() {
      //数据的初始化
    this.getdata.addData(100);
    this.getdata.addData(200);
      console.log(1);//this.arrData
      console.log(this.getdata.list);
  }
  ngDoCheck(){
    console.log(2);
  }
  fn(i){
    this.getIndex.emit(i);
  }
  
}
