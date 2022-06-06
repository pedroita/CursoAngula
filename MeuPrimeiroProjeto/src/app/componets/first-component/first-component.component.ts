import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name = "Pedro";
  job = "Desenvolvedor Back-end";
  age = 23;
  hobs = ["Lutar","correr"];
  car= {
    name : "polo",
    age : 2015,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
