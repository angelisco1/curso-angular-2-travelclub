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
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
