import { createSelector } from "@ngrx/store";
import { IAppState, ICuenta } from "../app.state";


const selectContadorState = (state: IAppState) => {
  console.log(state)
  return state.contadorState
}

export const selectCuenta$ = createSelector(
  selectContadorState,
  (contadorState: ICuenta) => {
    return contadorState.cuenta
  }
)