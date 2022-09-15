import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { sacarProducto } from '../../state/actions/maquina-expendedora.actions';
import { IAppState } from '../../state/app.state';

@Component({
  selector: 'app-panel-codigo',
  templateUrl: './panel-codigo.component.html',
  styleUrls: ['./panel-codigo.component.css']
})
export class PanelCodigoComponent implements OnInit {
  formCodigo: FormGroup

  constructor(private store: Store<IAppState>) {
    this.formCodigo = new FormGroup({
      codigo: new FormControl(0, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  sacarProducto() {
    const codigo = this.formCodigo.value
    console.log(codigo)
    const sacarProductoAction = sacarProducto(codigo)
    this.store.dispatch(sacarProductoAction)
  }
}
