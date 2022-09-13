import { AdminComponent } from "./admin/admin.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./login/login.component";
import { MiRouterModule } from "./mi-router/mi-router.module";

const APP_ROUTES = [
  { path: '/inicio', component: InicioComponent },
  { path: '/login', component: LoginComponent },
  { path: '/admin/clientes', component: AdminComponent }
]

export const RouterModule = MiRouterModule.forRoot(APP_ROUTES)