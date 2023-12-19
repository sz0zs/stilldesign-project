import { Route } from '@angular/router'
import { PageParams } from './core/services/page-params.service'

export type TypedRoute<T> = Omit<Route, 'data' | 'children'> & {
  data?: T
  children?: TypedRoute<T>[]
}

export type PORoute<T> = TypedRoute<PageParams & T>

export type PORoutes<T = Record<string, unknown>> = PORoute<T>[]

export const routes: PORoutes = [
  { path: 'tutorials', loadChildren: () => import('./modules/tutorials/routes').then((mod) => mod.TUTORIALS_ROUTES) }
]
