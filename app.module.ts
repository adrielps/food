import { LoginComponent } from './auth/login/login.component';
import { ProdutosService } from './admin/cadastros/produtos/produtos.service';
import { NovoClienteService } from './admin/cadastros/clientes/novoCliente/novo-cliente.service';
import { NovoProdutoService } from './admin/cadastros/produtos/novoProduto/novo-produto.service';
import { ClientesService } from './admin/cadastros/clientes/clientes.service';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CentroCustosService } from './admin/cadastros/centro-custos/centro-custos.service';
import { TiposDocumentosService } from './admin/cadastros/tipos-documentos/tipos-documentos.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NovoCentroCustosService } from './admin/cadastros/centro-custos/novo-centro-custos/novo-centro-custos.service';
import { AuthService } from './auth/login/auth.service';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    HttpModule,
    CommonModule
  ],
  providers: [    
    CentroCustosService,
    TiposDocumentosService,
    ClientesService,
    NovoClienteService,
    ProdutosService,
    NovoProdutoService,
    NovoCentroCustosService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
