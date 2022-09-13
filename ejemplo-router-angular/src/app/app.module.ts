import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiRouterLinkDirective } from './mi-router/mi-router-link.directive';
import { MiRouterOutletComponent } from './mi-router/mi-router-outlet/mi-router-outlet.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
