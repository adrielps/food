import { ClientesComponent } from './clientes.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './../../../app.component';
import { AdminDashboardComponent } from './../../admin-dashboard/admin-dashboard.component';
import { AdminControlSidebarComponent } from './../../admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './../../admin-footer/admin-footer.component';
import { AdminContentComponent } from './../../admin-content/admin-content.component';
import { AdminLeftSideComponent } from './../../admin-left-side/admin-left-side.component';
import { AdminComponent } from './../../admin.component';
import { AdminHeaderComponent } from './../../admin-header/admin-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    FormGroup,
    ClientesComponent,
    ReactiveFormsModule
  ],
  declarations: [
    AdminHeaderComponent,
    AdminComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent
  ]
})
export class ClientesModule { }
