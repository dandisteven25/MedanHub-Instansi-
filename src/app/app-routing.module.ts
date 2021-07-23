import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sedang-ditangani',
    loadChildren: () => import('./pages-in-laporan/sedang-ditangani/sedang-ditangani.module').then( m => m.SedangDitanganiPageModule)
  },
  {
    path: 'selesai',
    loadChildren: () => import('./pages-in-laporan/selesai/selesai.module').then( m => m.SelesaiPageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./pages-in-profil/edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./pages-in-profil/tentang/tentang.module').then( m => m.TentangPageModule)
  },
  {
    path: 'menunggu',
    loadChildren: () => import('./pages-in-laporan/menunggu/menunggu.module').then( m => m.MenungguPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update-detail',
    loadChildren: () => import('./update-detail/update-detail.module').then( m => m.UpdateDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
