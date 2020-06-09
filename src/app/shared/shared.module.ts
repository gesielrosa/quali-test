import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PageContentComponent,
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent,
    PageContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ]
})
export class SharedModule {
}
