import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { PlayComponent } from './play/play.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing module is used for routing the components for easy access

export const routes: Routes=[
  {path:'',component: PlayComponent, pathMatch:'full'},
  {path:'play',component:PlayComponent},
  {path:'success',component:SuccessComponent},
  ];
  @NgModule({
   
    declarations: [],
    imports: [
      CommonModule,RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
  })
export class GameRoutingModule { }
