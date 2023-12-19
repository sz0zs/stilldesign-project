import { MemoizeComponent } from './memoize/memoize.component'
import { PORoutes } from '../../app.routes'

export const TUTORIALS_ROUTES: PORoutes = [
  {
    path: 'memoize',
    data: {
      header: 'Memoize',
      pageTitle: 'Memoize'
    },
    component: MemoizeComponent
  }
]
