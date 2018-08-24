import { AppComponent } from './../../../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ProdutosComponent } from './produtos.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AdminHeaderComponent } from './../../admin-header/admin-header.component';
import { AdminComponent } from './../../admin.component';
import { AdminLeftSideComponent } from './../../admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './../../admin-content/admin-content.component';
import { AdminFooterComponent } from './../../admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './../../admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboardComponent } from './../../admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoBarraComponent } from './codigo-barra/codigo-barra.component';

@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    HttpModule,
    FormsModule,
    FormGroup,
    ProdutosComponent,
    ReactiveFormsModule  
  ],
  declarations: [
    AdminHeaderComponent,
    AdminComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent,
    CodigoBarraComponent
  ]
})
export class ProdutosModule { }
