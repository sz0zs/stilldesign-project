import { ChangeDetectionStrategy, Component } from '@angular/core'
import { memoize, memoizeFn, MemoizeFnReturn } from '../../../core/decorators/memoize.decorator'

type TitleType = 'AAA' | 'BBB'

@Component({
  standalone: true,
  imports: [],
  templateUrl: './memoize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoizeComponent {
  title: TitleType = 'AAA'
  memoizedFn: MemoizeFnReturn<TitleType> = memoizeFn((title: TitleType) => title)
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
