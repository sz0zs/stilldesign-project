import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {USERS_DEFAULT_DATA} from "./core/data";
import {HeaderComponent} from "./shared/header/header.component";

@Component({
  selector: 'po-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  users = USERS_DEFAULT_DATA
}
/*
TODO
TASKOK
. GIT
- linter/prettier
- css
- header
- footer
- menu
- standalone user module lazy loading
- user module (list, create / view, form, form tabs: base form details, address editor, role editor)
- inputok létrehozása
- signal in user module
- material
- ng zorro
- bootstrap
- base css
- memoization
- NGRX store
- NGRX feature store
- NGRX with signals
- title handler
- inputokból npm package
- SSR
- SEO
- Universal
- BE
 */
