import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//este import hace que sea posible el ruteo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { QuejasComponent } from './components/quejas/quejas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HistoriaComponent,
    QuejasComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
