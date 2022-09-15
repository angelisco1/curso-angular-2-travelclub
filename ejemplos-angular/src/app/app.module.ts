import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { AcordeonComponent } from './transclusion/acordeon/acordeon.component';
import { DirectivaViewchildComponent } from './directiva-viewchild/directiva-viewchild.component';
import { ComponentesDinamicosComponent } from './componentes-dinamicos/componentes-dinamicos.component';
import { VideoComponent } from './componentes-dinamicos/video/video.component';
import { AudioComponent } from './componentes-dinamicos/audio/audio.component';
import { HostDirective } from './componentes-dinamicos/host.directive';
import { ModalComponent } from './componentes-dinamicos/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { CmpNgrxComponent } from './cmp-ngrx/cmp-ngrx.component';
import { ContadorComponent } from './cmp-ngrx/contador/contador.component';
import { AppReducers } from './cmp-ngrx/state/app.state';
import { MaquinaExpendedoraComponent } from './cmp-ngrx/maquina-expendedora/maquina-expendedora.component';
import { ListaProductosComponent } from './cmp-ngrx/maquina-expendedora/lista-productos/lista-productos.component';
import { PanelCodigoComponent } from './cmp-ngrx/maquina-expendedora/panel-codigo/panel-codigo.component';
import { ProductoComponent } from './cmp-ngrx/maquina-expendedora/producto/producto.component';
import { EffectsModule } from '@ngrx/effects';
import { MaquinaExpendedoraEffects } from './cmp-ngrx/state/effects/maquina-expendedora.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TransclusionComponent,
    AcordeonComponent,
    DirectivaViewchildComponent,
    ComponentesDinamicosComponent,
    VideoComponent,
    AudioComponent,
    HostDirective,
    ModalComponent,
    CmpNgrxComponent,
    ContadorComponent,
    MaquinaExpendedoraComponent,
    ListaProductosComponent,
    PanelCodigoComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducers, {}),
    EffectsModule.forRoot([MaquinaExpendedoraEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
