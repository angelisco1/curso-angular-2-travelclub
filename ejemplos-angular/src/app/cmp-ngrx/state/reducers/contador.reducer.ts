import { createReducer, on } from "@ngrx/store";
import { decrementar, incrementar } from "../actions/contador.actions";
import { ICuenta } from "../app.state";


const initialState: ICuenta = {
  cuenta: 0,
}

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state, action) => {
    console.log(state)
    console.log(action)
    return { cuenta: state.cuenta + 1 }
  }),
  on(decrementar, (state, action) => {
    return { cuenta: state.cuenta - 1 }
  }),
)