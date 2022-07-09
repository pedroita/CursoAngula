import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindine',
  templateUrl: './two-way-bindine.component.html',
  styleUrls: ['./two-way-bindine.component.css']
})
export class TwoWayBindineComponent implements OnInit {
  name: string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
