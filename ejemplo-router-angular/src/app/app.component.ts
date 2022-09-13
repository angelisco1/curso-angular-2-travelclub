import { Component } from '@angular/core';
import { MiRouterService } from './mi-router/mi-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-router-angular';

  constructor(private miRouter: MiRouterService) { }

  login() {
    this.miRouter.navigate('/login')
  }
}
