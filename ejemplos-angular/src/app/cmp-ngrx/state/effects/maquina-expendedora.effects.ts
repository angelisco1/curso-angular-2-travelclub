import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs";
import { IProducto, ProductosService } from "../../maquina-expendedora/productos.service";
import { CARGAR_PRODUCTOS } from "../actions/actions.types";
import { inicializarProductos } from "../actions/maquina-expendedora.actions";

@Injectable()
export class MaquinaExpendedoraEffects {

  cargarProductos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CARGAR_PRODUCTOS),
      switchMap(() => {
        return this.productosService.getProductos().pipe(
          map((productos: Array<IProducto>) => {
            return inicializarProductos({ productos: productos })
          })
        )
      })
    )
  })

  constructor(private actions$: Actions, private productosService: ProductosService) {

  }

}