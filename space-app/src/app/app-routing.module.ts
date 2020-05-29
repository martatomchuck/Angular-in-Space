import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceModule } from './space/space.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';


const routes: Routes = [
  {path: 'intel', loadChildren: () => import(`./intel/intel.module`).then(m => m.IntelModule)},
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SpaceModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
