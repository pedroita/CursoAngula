import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Turca",type:"dog" },
    {name: "Tete", type:"gate"},
    {name: "vick",type:"dog"},
    {name: "guto",type:"bird"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
