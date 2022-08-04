import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plog',
    loadChildren: () => import('./plog/plog.module').then( m => m.PlogPageModule)
  },
  {
    path: 'dlog',
    loadChildren: () => import('./dlog/dlog.module').then( m => m.DlogPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then( m => m.RegPageModule)
  },
  {
    path: 'ddetails',
    loadChildren: () => import('./ddetails/ddetails.module').then( m => m.DdetailsPageModule)
  },
  {
    path: 'doc2',
    loadChildren: () => import('./doc2/doc2.module').then( m => m.Doc2PageModule)
  },
  {
    path: 'pfile',
    loadChildren: () => import('./pfile/pfile.module').then( m => m.PfilePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'us',
    loadChildren: () => import('./us/us.module').then( m => m.UsPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'do',
    loadChildren: () => import('./do/do.module').then( m => m.DoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
