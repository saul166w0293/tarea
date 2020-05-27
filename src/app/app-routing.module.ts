//se importan los componentes a ulizar desde su ruta
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaComponent } from './components/historia/historia.component';
import { QuejasComponent } from './components/quejas/quejas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

//reglas de ruteo
// denro de los parametros de la Array colocamos nuestras rutas con las que queremos trabajar 
const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"historia", component: HistoriaComponent},
  { path:"quejas", component: QuejasComponent},
  { path:"contacto", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
