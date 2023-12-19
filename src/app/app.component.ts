import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { USERS_DEFAULT_DATA } from './core/data'
import { HeaderComponent } from './shared/header/header.component'
import { PageParamsService } from './core/services/page-params.service'

@Component({
  selector: 'po-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  users = USERS_DEFAULT_DATA

  constructor(private _pageParams: PageParamsService) {}

  ngOnInit() {
    this._pageParams.watchPageParams()
  }
}
