import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pages/pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'iniciodocente',
    loadChildren: () => import('./pages/iniciodocente/iniciodocente.module').then( m => m.IniciodocentePageModule)
  },
  {
    path: 'inicioalumno',
    loadChildren: () => import('./pages/inicioalumno/inicioalumno.module').then( m => m.InicioalumnoPageModule)
  },
  {
    path: 'menualumno',
    loadChildren: () => import('./pages/menualumno/menualumno.module').then( m => m.MenualumnoPageModule)
  },
  {
    path: 'recuperaralumno',
    loadChildren: () => import('./pages/recuperaralumno/recuperaralumno.module').then( m => m.RecuperaralumnoPageModule)
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'crearqr',
    loadChildren: () => import('./pages/crearqr/crearqr.module').then( m => m.CrearqrPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
