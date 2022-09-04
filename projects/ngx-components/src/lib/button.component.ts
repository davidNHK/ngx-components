import {  Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import cn from 'classnames';
import "wired-elements/lib/wired-button"

import { palette } from '../theme';

@Component({
  selector: 'ngx-button',
  standalone: true,
  styles: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<wired-button class="{{classNames}}">ngx-components works!</wired-button>`,
})
export class ButtonComponent implements OnInit {

  classNames = ""
  constructor() {
    this.classNames = cn("primary", palette.primary.main, palette.primary.contrastText, palette.primary.hover.main, palette.primary.hover.contrastText)
  }

  ngOnInit(): void {}
}
