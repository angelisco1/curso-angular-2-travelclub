import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AdminComponent } from 'src/app/admin/admin.component';
import { InicioComponent } from 'src/app/inicio/inicio.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MiHostDirective } from '../mi-host.directive';
import { MiRouterService } from '../mi-router.service';

@Component({
  selector: 'app-mi-router-outlet',
  templateUrl: './mi-router-outlet.component.html',
  styleUrls: ['./mi-router-outlet.component.css']
})
export class MiRouterOutletComponent implements OnInit, AfterViewInit {
  // rutas = [
  //   { path: '/inicio', component: InicioComponent },
  //   { path: '/login', component: LoginComponent },
  //   { path: '/admin/clientes', component: AdminComponent }
  // ]

  @ViewChild(MiHostDirective) host!: MiHostDirective

  constructor(private miRouter: MiRouterService, @Inject('RutasApp') private rutas: Array<any>) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log({ 'HOST': this.host })
    this.miRouter.rutaCambiada$
      .subscribe((path: string) => {
        console.log(path)
        const ruta = this.rutas.find(ruta => ruta.path === path)
        this.crearPagina(ruta?.component)
      })
  }

  crearPagina(pagina: any) {
    // Aquí va la lógica para limpiar y crear el componente
    this.host.viewContainerRef.clear()
    this.host.viewContainerRef.createComponent(pagina)
  }

}
