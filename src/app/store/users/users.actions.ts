import { createAction, props } from '@ngrx/store'
import { User } from '../../core/models/user'

export interface UserProps {
  user: User
}

export interface EditUserProps extends UserProps {
  id: number
}

export const updateUser = createAction('[USERS] edit existing user by id', props<{ user: EditUserProps }>())

export const saveUser = createAction('[USERS] save new user', props<{ user: UserProps }>())
