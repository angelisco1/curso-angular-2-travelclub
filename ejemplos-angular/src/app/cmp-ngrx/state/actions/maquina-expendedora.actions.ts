import { createAction, props } from "@ngrx/store";
import { IProducto } from "../../maquina-expendedora/productos.service";
import * as ActionTypes from './actions.types'

export const cargarProductos = createAction(
  ActionTypes.CARGAR_PRODUCTOS
)

export const inicializarProductos = createAction(
  ActionTypes.INICIALIZAR_PRODUCTOS,
  props<{ productos: Array<IProducto> }>()
)

export const sacarProducto = createAction(
  ActionTypes.SACAR_PRODUCTO,
  props<{ codigo: number }>()
)