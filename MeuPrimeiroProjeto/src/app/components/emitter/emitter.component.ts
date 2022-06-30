import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber: number = 80 ;
  constructor() { }

  ngOnInit(): void {
  }
  onChangerNumber(){
    this.myNumber = Math.floor(Math.random()*10000);
  }

}
