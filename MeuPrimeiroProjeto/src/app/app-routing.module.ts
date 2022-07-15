import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './componets/first-component/first-component.component';

const routes: Routes = [
  {path:'',component:FirstComponentComponent},
  {path:'list',component: ListRenderComponent},
  {path:'sda',component: IfRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
