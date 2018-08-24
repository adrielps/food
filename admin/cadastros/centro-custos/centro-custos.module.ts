import { AppComponent } from './../../../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminHeaderComponent } from './../../admin-header/admin-header.component';
import { AdminComponent } from './../../admin.component';
import { AdminControlSidebarComponent } from './../../admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './../../admin-footer/admin-footer.component';
import { AdminContentComponent } from './../../admin-content/admin-content.component';
import { AdminLeftSideComponent } from './../../admin-left-side/admin-left-side.component';
import { AdminDashboardComponent } from './../../admin-dashboard/admin-dashboard.component';

import { CentroCustosComponent } from './centro-custos.component';
import { NovoCentroCustosComponent } from './novo-centro-custos/novo-centro-custos.component';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    FormGroup,
    CentroCustosComponent,
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
    NovoCentroCustosComponent
  ]
})
export class CentroCustosModule { }
