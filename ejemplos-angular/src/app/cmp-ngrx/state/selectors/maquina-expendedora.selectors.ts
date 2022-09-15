import { createSelector } from "@ngrx/store";
import { IAppState, IMaqExpendedora } from "../app.state";


// 👉 CREAR EL SELECTOR QUE DEVUELVE SOLO LA PROPIEDAD "productos"
const selectMaqExpendedoraState = (state: IAppState) => {
  return state.maquinaExpendedoraState
}

export const selectProductos$ = createSelector(
  selectMaqExpendedoraState,
  (maqExpState: IMaqExpendedora) => {
    return maqExpState.productos
  }
)

export const selectLoading$ = createSelector(
  selectMaqExpendedoraState,
  (maqExpState: IMaqExpendedora) => {
    return maqExpState.loading
  }
)