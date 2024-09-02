import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { MaterialComponent } from './pages/material/material.component';
import { PomarCadComponent } from './pomarcad/pomarcad.component';
import { arvoreComponent } from './pages/arvore/arvore.component';
import { colheitaComponent } from './pages/colheita/colheita.component';
import { MovimentoComponent } from './movimento/movimento.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cadUsuario',component:CadUsuarioComponent},
  {path:'material',component:MaterialComponent},
  {path:'produto',component:ProdutoComponent},
  {path:'pomarcad',component:PomarCadComponent},
  {path:'arvore',component:arvoreComponent},
  {path:'colheita',component:colheitaComponent},
  {path:'movimento',component:MovimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
