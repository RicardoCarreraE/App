import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },
  {
    path: 'perfil-alumno',
    loadChildren: () => import('./perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'home-chofer',
    loadChildren: () => import('./home-chofer/home-chofer.module').then( m => m.HomeChoferPageModule)
  },
  {
    path: 'perfil-chofer',
    loadChildren: () => import('./perfil-chofer/perfil-chofer.module').then( m => m.PerfilChoferPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'viaje-ruta-chofer',
    loadChildren: () => import('./viaje-ruta-chofer/viaje-ruta-chofer.module').then( m => m.ViajeRutaChoferPageModule)
  },
  {
    path: 'viaje-ruta-alumno',
    loadChildren: () => import('./viaje-ruta-alumno/viaje-ruta-alumno.module').then( m => m.ViajeRutaAlumnoPageModule)
  },
  {
    path: 'mis-viajes-chofer',
    loadChildren: () => import('./mis-viajes-chofer/mis-viajes-chofer.module').then( m => m.MisViajesChoferPageModule)
  },
  {
    path: 'mis-viajes-alumno',
    loadChildren: () => import('./mis-viajes-alumno/mis-viajes-alumno.module').then( m => m.MisViajesAlumnoPageModule)
  },
  {
    path: 'auto-chofer',
    loadChildren: () => import('./auto-chofer/auto-chofer.module').then( m => m.AutoChoferPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
