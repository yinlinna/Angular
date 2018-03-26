import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { Http,Jsonp } from "@angular/http";  
import { Headers } from "@angular/http";


@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  

  constructor(public router:Router, public http:Http,public jsonp:Jsonp ){  }

  //@Input() list:Array<any>;
  //@Input() list=[1,2,3,4,5,6]
  list:number[]=[1,2,3,4,5,6];
  
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  ngOnInit() {
    
    //this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe( data=>{  
      //console.log(data['_body']);
      //this.list = JSON.parse(data['_body']);
   // },err=>{
     // console.log(err);
  // } );
    //this.http.post( 'http://datainfo.duapp.com/shopdata/getclass.php',data, {headers:this.headers} ).subscribe(  );

    this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe( data=>{ 
      //console.log(data.goodsID);
      this.list = data['_body'];
     } );
  }
  idx=[];
  goDetail(idx){
      this.router.navigate(['/goodslist/gooddetail',idx]);//,[queryParams:{num:100}]
  }

}
