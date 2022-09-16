import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private http: HttpClient) { }

  guardar(subscription: PushSubscription) {
    return this.http.post('https://fluentjobs-fa22e.firebaseio.com/pro/curso-angular/angel-subs.json', subscription)
  }
}
