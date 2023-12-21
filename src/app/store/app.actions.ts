import { createAction } from '@ngrx/store'

export const defaultMessage = createAction('[APP] welcome message', (message: string) => ({ message }))
