import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../state/app.state';
import { selectProductos$ } from '../../state/selectors/maquina-expendedora.selectors';
import { IProducto } from '../productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Array<IProducto> = []

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    // 👉 Aquí habrá que usar un selector para inicializar productos
    this.store.select(selectProductos$).subscribe((productos: Array<IProducto>) => {
      this.productos = productos
    })
  }

}
