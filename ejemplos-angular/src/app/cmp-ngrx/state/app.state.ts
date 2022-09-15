import { ActionReducerMap } from "@ngrx/store";
import { IProducto } from "../maquina-expendedora/productos.service";
import { contadorReducer } from "./reducers/contador.reducer";
import { maquinaExpendedoraReducer } from "./reducers/maquina-expendedora.reducer";

export interface ICuenta {
  cuenta: number
}

export interface IMaqExpendedora {
  loading: boolean,
  productos: Array<IProducto>
}

export interface IAppState {
  contadorState: ICuenta,
  maquinaExpendedoraState: IMaqExpendedora
}


export const AppReducers: ActionReducerMap<IAppState> = {
  contadorState: contadorReducer,
  maquinaExpendedoraState: maquinaExpendedoraReducer
}