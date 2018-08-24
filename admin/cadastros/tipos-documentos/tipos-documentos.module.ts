import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposDocumentosComponent } from './../../cadastros/tipos-documentos/tipos-documentos.component';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './../../admin-header/admin-header.component';
import { AdminComponent } from './../../admin.component';
import { AdminControlSidebarComponent } from './../../admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './../../admin-footer/admin-footer.component';
import { AdminContentComponent } from './../../admin-content/admin-content.component';
import { AdminLeftSideComponent } from './../../admin-left-side/admin-left-side.component';
import { AdminDashboardComponent } from './../../admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    FormGroup,    
    TiposDocumentosComponent,
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent
  ]
})
export class TiposDocumentosModule { }
