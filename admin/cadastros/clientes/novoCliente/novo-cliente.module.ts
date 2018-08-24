import { AppComponent } from './../../../../app.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NovoClienteComponent } from './novo-cliente.component';
import { AdminHeaderComponent } from './../../../admin-header/admin-header.component';
import { AdminComponent } from './../../../admin.component';
import { AdminLeftSideComponent } from './../../../admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './../../../admin-content/admin-content.component';
import { AdminFooterComponent } from './../../../admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './../../../admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboardComponent } from './../../../admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    NovoClienteComponent,
    AppComponent,
    BrowserModule,
    HttpModule,
    FormsModule,
    FormGroup,
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
export class NovoClienteModule { }
