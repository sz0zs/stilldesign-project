import { MemoizeComponent } from './memoize/memoize.component'
import { PORoutes } from '../../app.routes'
import { InputBaseComponent } from './input-base/input-base.component'

export const TUTORIAL_MEMOIZE_URL = 'memoize'
export const TUTORIAL_FORM_BASE_URL = 'form-base'

export const TUTORIALS_ROUTES: PORoutes = [
  {
    path: TUTORIAL_MEMOIZE_URL,
    data: {
      header: 'Memoize',
      pageTitle: 'Memoize'
    },
    component: MemoizeComponent
  },
  {
    path: TUTORIAL_FORM_BASE_URL,
    data: {
      header: 'Form – HTML5 native elements',
      pageTitle: 'Form – Base'
    },
    component: InputBaseComponent
  }
]
