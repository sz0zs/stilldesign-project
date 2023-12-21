import { AppState } from '../state'
import { User } from '../../core/models/user'
import { createFeature, createReducer, on } from '@ngrx/store'
import { saveUser, updateUser } from './users.actions'

const initialUsersState: AppState<User[]> = {
  data: [],
  loading: false,
  error: null
}

export const usersReducer = createReducer(
  initialUsersState,
  on(updateUser, (store, action) => {
    const index = store.data.findIndex((user: User) => user.id === action.id!)
    const clonedUsers = [...store.data]
    clonedUsers[index] = action.user
    return { ...store, data: clonedUsers, error: null, loading: false }
  }),
  on(saveUser, (store, action) => ({
    ...store,
    data: [
      ...store.data,
      {
        ...action.user,
        id: (store.data?.length ? Math.max(...store.data.map((user) => user.id)) : 0) + 1
      }
    ],
    error: null,
    loading: false
  }))
)

export const USERS_FEATURE_KEY = 'users'

export const usersFeature = createFeature({
  name: USERS_FEATURE_KEY,
  reducer: usersReducer
})
