import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './../auth/login/login.component';
import { TiposDocumentosComponent } from '../admin/cadastros/tipos-documentos/tipos-documentos.component';
import { CentroCustosComponent } from '../admin/cadastros/centro-custos/centro-custos.component';
import { ClientesComponent } from './../admin/cadastros/clientes/clientes.component';
import { NovoClienteComponent } from './../admin/cadastros/clientes/novoCliente/novo-cliente.component';
import { ProdutosComponent } from './../admin/cadastros/produtos/produtos.component';
import { NovoProdutoComponent } from './../admin/cadastros/produtos/novoProduto/novo-produto.component';
import { CodigoBarraComponent } from './../admin/cadastros/produtos/codigo-barra/codigo-barra.component';
import { NovoCentroCustosComponent } from './../admin/cadastros/centro-custos/novo-centro-custos/novo-centro-custos.component';
import { AuthGuard } from './../guards/auth-guard';

/*
const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth/login', component: LoginComponent },  
  { path: 'centro-custos', component: CentroCustosComponent, canActivate: [AuthGuard] },  
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);*/
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'auth/login', pathMatch: 'full', canActivate: [AuthGuard] },
      //{ path: '', component: LoginComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'tipos-documentos', component: TiposDocumentosComponent, canActivate: [AuthGuard] },
      { path: 'centro-custos', component: CentroCustosComponent/*, canActivate: [AuthGuard]*/ },      
      { path: 'centro-custos/:id', component: CentroCustosComponent, canActivate: [AuthGuard]},
      { path: 'clientes', component: ClientesComponent/*, canActivate: [AuthGuard]*/ },
      { path: 'novo-cliente', component: NovoClienteComponent, canActivate: [AuthGuard] },      
      { path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuard] },      
      { path: 'novo-produto', component: NovoProdutoComponent, canActivate: [AuthGuard] },      
      { path: 'codigo-barras', component: CodigoBarraComponent, canActivate: [AuthGuard] },    
      { path: 'novo-centro-custos', component: NovoCentroCustosComponent/*, canActivate: [AuthGuard]*/ }     
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
