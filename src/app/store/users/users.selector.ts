import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../state'
import { User } from '../../core/models/user'
import { USERS_FEATURE_KEY } from './users.reducer'

export const selectUsersSelector = createFeatureSelector<AppState<User[]>>(USERS_FEATURE_KEY)

export const selectUsers = createSelector(selectUsersSelector, (state) => state.data)
