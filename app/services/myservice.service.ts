import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  list :any;
  
//get(url:number){
 // $.ajax({
   // url:url,
   // type:,
   // return url+100;
 // })
//}

 addData(key:string,data:any){
   //console.log(10);
    localStorage.setItem(key,data);
  }
  getData(key){
    this.list=localStorage.getItem(key);
    return this.list;
}
//localStorage.setItem('name','[1,2,3]');
//setItem(a,value){
 // localStorage.setItem(a,value);
//}

}
