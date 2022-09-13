import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiRouterService {
  rutaCambiada$ = new BehaviorSubject('/inicio')

  constructor() { }

  navigate(path: string | Array<string>) {
    // console.log(path)
    if (path instanceof Array) {
      path = path.join('/')
    }
    window.history.pushState(null, '', path)
    this.rutaCambiada$.next(path)
  }
}