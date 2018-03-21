import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() event = new EventEmitter();
  content='';
  add(){
    console.log(this.content);
    this.event.emit(this.content);
    this.content='';
  }
}
