import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementar, incrementar } from '../state/actions/contador.actions';
import { IAppState } from '../state/app.state';
import { selectCuenta$ } from '../state/selectors/contador.selectors';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cuenta: number = 0
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.select(selectCuenta$).subscribe((cuenta: number) => {
      this.cuenta = cuenta
    })
  }

  decrementar() {
    const decrementarAction = decrementar()
    this.store.dispatch(decrementarAction)
  }

  incrementar() {
    const incrementarAction = incrementar()
    this.store.dispatch(incrementarAction)
  }

}
