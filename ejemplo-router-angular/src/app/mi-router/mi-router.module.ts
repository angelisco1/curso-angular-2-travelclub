import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiHostDirective } from './mi-host.directive';
import { MiRouterLinkDirective } from './mi-router-link.directive';
import { MiRouterOutletComponent } from './mi-router-outlet/mi-router-outlet.component';


@NgModule({
  declarations: [
    MiHostDirective,
    MiRouterLinkDirective,
    MiRouterOutletComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiRouterOutletComponent,
    MiRouterLinkDirective
  ]
})
export class MiRouterModule {
  static forRoot(rutas: Array<any>): ModuleWithProviders<MiRouterModule> {
    return {
      ngModule: MiRouterModule,
      providers: [
        { provide: 'RutasApp', useValue: rutas }
      ]
    }
  }
}
