
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import{ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MaterialComponent } from './pages/material/material.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { PomarcadComponent } from './pomarcad/pomarcad.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { ColheitaComponent } from './pages/colheita/colheita.component';
import { ArvoreComponent } from './pages/arvore/arvore.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CadUsuarioComponent,
    MaterialComponent,
    ProdutoComponent,
    PomarcadComponent,
    MovimentoComponent,
    ColheitaComponent,
    ArvoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
