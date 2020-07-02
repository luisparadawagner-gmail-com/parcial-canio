import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { PlanillaComponent } from './planilla/planilla.component';


const routes: Routes = [

  { path : 'alumno-component', component: AlumnoComponent},
  { path : 'planilla-component', component: PlanillaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
