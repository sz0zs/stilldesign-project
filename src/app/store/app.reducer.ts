import { createReducer, on } from '@ngrx/store'
import { defaultMessage } from './app.actions'

export interface AppStore {
  test: string
}

const initialAppState: AppStore = { test: '' }

export const appReducer = createReducer<AppStore>(
  initialAppState,
  on(
    defaultMessage,
    (state, { message }): AppStore => ({
      ...state,
      test: message
    })
  )
)
