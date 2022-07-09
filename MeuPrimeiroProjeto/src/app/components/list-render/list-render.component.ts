import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
 import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals : Animal[] = [
    {name: 'Turca',type:'dog',age:25 },
    {name: 'Tete', type:'gate',age:32},
    {name: 'vick',type:'dog',age:41},
    {name: 'guto',type:'bird',age:96},
  ];
  animal: Animal = {
    name:'teste',
    type:"string",
    age:10,
  };

  animalDetails = '';
  constructor(private listService: ListService) {}

  ngOnInit(): void {}
  showAge(animal: Animal):void{
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos!`;
  }
  removeAnimal(animal: Animal){
    console.log(" Removendo animal");
    this.animals=this.listService.remove(this.animals,animal);
  }
}
