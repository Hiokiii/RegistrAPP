import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaralumnoPage } from './recuperaralumno.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaralumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaralumnoPageRoutingModule {}
