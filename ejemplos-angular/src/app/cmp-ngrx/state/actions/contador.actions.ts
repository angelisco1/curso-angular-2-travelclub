import { createAction } from '@ngrx/store'
import * as ActionTypes from './actions.types'

export const incrementar = createAction(
  ActionTypes.INCREMENTAR
)

export const decrementar = createAction(
  ActionTypes.DECREMENTAR
)