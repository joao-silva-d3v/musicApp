import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'music-list',
    pathMatch: 'full'
  },
  {
    path: 'music-list',
    loadChildren: () => import('./music-list/music-list.module').then(m => m.MusicListPageModule)
  },
  {
    path: 'music-detail/:id',
    loadChildren: () => import('./music-detail/music-detail.module').then(m => m.MusicDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
