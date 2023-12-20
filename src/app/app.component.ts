import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { USERS_DEFAULT_DATA } from './core/data'
import { HeaderComponent } from './shared/header/header.component'
import { PageParamsService } from './core/services/page-params.service'
import { TUTORIAL_FORM_BASE_URL, TUTORIAL_MEMOIZE_URL } from './modules/tutorials/routes'

@Component({
  selector: 'po-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink],
  styles: [`
    div.menu {
      background-color: lightblue;

      nav {

        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;

          li {
            display: inline-block;
            padding: 20px 0;
            margin-left: 20px;

            a {
            font-weight: bold;
            }
          }
        }
      }
    }
  `],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  protected readonly TUTORIAL_MEMOIZE_URL = TUTORIAL_MEMOIZE_URL
  protected readonly TUTORIAL_FORM_BASE_URL = TUTORIAL_FORM_BASE_URL

  constructor(private _pageParams: PageParamsService) {}

  ngOnInit() {
    this._pageParams.watchPageParams()
  }

}
