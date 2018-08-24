import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './../../../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHeaderComponent } from './../../../admin-header/admin-header.component';
import { AdminComponent } from './../../../admin.component';
import { AdminLeftSideComponent } from './../../../admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './../../../admin-content/admin-content.component';
import { AdminFooterComponent } from './../../../admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './../../../admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboardComponent } from './../../../admin-dashboard/admin-dashboard.component';
import { NovoCentroCustosComponent } from './novo-centro-custos.component';

@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    NovoCentroCustosComponent,
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
export class NovoCentroCustosModule { }
