import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: 'tutorials',
    loadChildren: () => import('./modules/tutorials/routes').then(mod => mod.TUTORIALS_ROUTES)
  }
]
