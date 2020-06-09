import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationsComponent } from './authorizations.component';
import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationsComponent
  },
  {
    path: ':id/edit',
    component: AuthorizationFormComponent
  },
  {
    path: ':id/details',
    component: AuthorizationFormComponent
  },
  {
    path: 'new',
    component: AuthorizationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationsRoutingModule {
}
