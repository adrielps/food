import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodigoBarraComponent } from './cadastros/produtos/codigo-barra/codigo-barra.component';
import { NovoProdutoComponent } from './cadastros/produtos/novoProduto/novo-produto.component';
import { NovoClienteComponent } from './cadastros/clientes/novoCliente/novo-cliente.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposDocumentosComponent } from './cadastros/tipos-documentos/tipos-documentos.component';
import { CentroCustosComponent } from './cadastros/centro-custos/centro-custos.component';
import { ClientesComponent } from './cadastros/clientes/clientes.component';
import { ProdutosComponent } from './cadastros/produtos/produtos.component';
import { NovoCentroCustosComponent } from './cadastros/centro-custos/novo-centro-custos/novo-centro-custos.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent,
    TiposDocumentosComponent,
    CentroCustosComponent,
    ClientesComponent,
    NovoClienteComponent,
    ProdutosComponent,
    NovoProdutoComponent,
    CodigoBarraComponent,
    NovoCentroCustosComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
