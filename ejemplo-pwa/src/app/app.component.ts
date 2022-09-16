import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { SubscriptionsService } from './subscriptions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ESTO DEBERÍA DE ESTAR EN LAS VARIABLES DE ENTORNO
  private VAPID_PUBLIC_KEY = "BGgqSvQC7qvw79eQVPBkHgJnAqSYxVl893PzhzfRbSJyBdSSaD3MOIrc6HIkoSwrL8bdEnoL1GjPz1hqFOAMqjw"

  constructor(private swPush: SwPush, private subsService: SubscriptionsService) {
    this.generarSuscripcion()
  }

  generarSuscripcion() {
    this.swPush.requestSubscription({ serverPublicKey: this.VAPID_PUBLIC_KEY })
      .then((subscription: PushSubscription) => {
        console.log({ subscription })
        this.subsService.guardar(subscription)
          .subscribe({
            next: (resp: any) => {
              console.log({ resp })
            },
            error: (error) => {
              console.log({ error })
            }
          })
      })
  }
}
