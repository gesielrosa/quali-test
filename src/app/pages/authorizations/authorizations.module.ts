import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationsComponent } from './authorizations.component';
import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthorizationsTableComponent } from './authorizations-table/authorizations-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoaderIndicatorModule } from "ngx-loader-indicator";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AuthorizationsComponent,
    AuthorizationFormComponent,
    AuthorizationsTableComponent
  ],
  imports: [
    CommonModule,
    AuthorizationsRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoaderIndicatorModule,
    SweetAlert2Module
  ],
  exports: [
    AuthorizationsComponent,
    AuthorizationFormComponent,
    AuthorizationsTableComponent
  ]
})
export class AuthorizationsModule {
}
