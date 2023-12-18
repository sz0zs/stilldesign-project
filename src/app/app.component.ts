import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { USERS_DEFAULT_DATA } from './core/data'
import { HeaderComponent } from './shared/header/header.component'
import {
  memoize,
  memoizeFn,
  MemoizeFnReturn
} from './core/decorators/memoise.decorator'

type TitleType = 'AAA' | 'BBB'

@Component({
  selector: 'po-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  users = USERS_DEFAULT_DATA
  title: TitleType = 'AAA'
  memoizedFn: MemoizeFnReturn<TitleType> = memoizeFn(
    (title: TitleType) => title
  )
  private _clickCounter = 0

  @memoize()
  getTitleDec(title: TitleType) {
    return title
  }

  getTitleMem() {
    return this.memoizedFn(this.title)
  }

  toggleTitle() {
    if (this.title === 'AAA') this.title = 'BBB'
    else this.title = 'AAA'
  }

  increment() {
    this._clickCounter++
  }
}
