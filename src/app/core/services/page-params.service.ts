import { Injectable } from '@angular/core'
import { BehaviorSubject, filter } from 'rxjs'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

export interface PageParams {
  header?: string
  pageTitle?: string
}

@Injectable({
  providedIn: 'root'
})
export class PageParamsService {
  private _pageParams$ = new BehaviorSubject<null | PageParams>(null)

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  watchPageParams() {
    this._router.events
      .pipe(filter((router) => router instanceof NavigationEnd))
      .subscribe(() => this._pageParams$.next(this._findPageData()))
  }

  /**
   * Find the lowest data in the ActivatedRoute tree
   * @param route
   * @param pageParams
   * @private
   */
  private _findPageData(route: ActivatedRoute = this._route, pageParams: PageParams = MAIN_PAGE_PARAMS): PageParams {
    if ((route?.snapshot?.data && 'pageTitle' in route.snapshot.data) || 'header' in route.snapshot.data) {
      const data = route.snapshot.data as PageParams
      pageParams = { ...pageParams, ...data }
    }
    if (route.children.length) {
      return this._findPageData(route.children.at(0), pageParams)
    } else {
      return pageParams
    }
  }

  getPageParams() {
    return this._pageParams$.asObservable()
  }
}

const MAIN_PAGE_PARAMS: PageParams = {
  pageTitle: 'Main',
  header: 'Main'
}
