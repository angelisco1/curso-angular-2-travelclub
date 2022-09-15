import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarProductos } from '../state/actions/maquina-expendedora.actions';
import { IAppState } from '../state/app.state';
import { selectLoading$ } from '../state/selectors/maquina-expendedora.selectors';

@Component({
  selector: 'app-maquina-expendedora',
  templateUrl: './maquina-expendedora.component.html',
  styleUrls: ['./maquina-expendedora.component.css']
})
export class MaquinaExpendedoraComponent implements OnInit {
  loading: boolean = false
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    const actionCargar = cargarProductos()
    this.store.dispatch(actionCargar)

    this.store.select(selectLoading$).subscribe((loading: boolean) => {
      this.loading = loading
    })
  }

}
