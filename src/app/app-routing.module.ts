import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'authorizations',
    loadChildren: () => import('../app/pages/authorizations/authorizations.module').then(m => m.AuthorizationsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
