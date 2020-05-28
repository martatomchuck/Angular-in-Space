import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from './hangar/hangar.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { DestructionGuard } from './destruction.guard';


const routes: Routes = [
  {
    path: 'space',
    component: HangarComponent,
    children: [
      {path: 'production', component: EngineersRoomComponent},
      {path: 'destruction', component: DestructionRoomComponent, canActivate: [DestructionGuard]},
      {path: '', redirectTo: 'production', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
