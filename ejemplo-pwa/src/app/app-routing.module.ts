import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';
import { OfertaComponent } from './oferta/oferta.component';

const routes: Routes = [
  { path: '', component: ListaOfertasComponent },
  { path: 'nueva-oferta', component: NuevaOfertaComponent },
  { path: 'ofertas/:idOferta', component: OfertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
