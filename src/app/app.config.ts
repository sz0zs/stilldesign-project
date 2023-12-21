import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideState, provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { appReducer } from './store/app.reducer'
import { usersFeature } from './store/users/users.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ app: appReducer }),
    provideState(usersFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
}
