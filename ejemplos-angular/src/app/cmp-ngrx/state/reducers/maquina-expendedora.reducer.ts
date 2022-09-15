import { createReducer, on } from "@ngrx/store"
import { IProducto } from "../../maquina-expendedora/productos.service"
import { cargarProductos, inicializarProductos, sacarProducto } from "../actions/maquina-expendedora.actions"
import { IMaqExpendedora } from "../app.state"


const initialState: IMaqExpendedora = {
  productos: [],
  loading: false
}

export const maquinaExpendedoraReducer = createReducer(
  initialState,
  on(cargarProductos, (state, action) => {
    return { ...state, loading: true }
  }),
  on(inicializarProductos, (state, action) => {
    console.log('PASA POR AQUÍ', action)
    return { loading: false, productos: action.productos }
  }),
  on(sacarProducto, (state, action) => {
    console.log({ action })
    const productosActualizados = state.productos.map((prod: IProducto) => {
      if (prod.codigo === action.codigo && prod.stock > 0) {
        // Restamos el stock
        return { ...prod, stock: prod.stock - 1 }
      }
      return prod
    })

    return { ...state, productos: productosActualizados }
  }),
)