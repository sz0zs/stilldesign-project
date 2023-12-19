import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { PageParamsService } from '../../core/services/page-params.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'po-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pageParams$ = this._pageParamsService.getPageParams()

  constructor(private _pageParamsService: PageParamsService) {}
}
