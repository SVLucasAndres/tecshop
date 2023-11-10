import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab-home/tab-home.module').then(m => m.TabHomePageModule),
  },
  {
    path: 'tab1-with-tabs',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
  },
  {
    path: 'tabCompra',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule),
  }
];






@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
