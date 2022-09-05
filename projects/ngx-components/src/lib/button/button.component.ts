import {  Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Attribute } from '@angular/core';


@Component({
  selector: 'ngx-button',
  standalone: true,
  styles: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<button [attr.data-testid]="testId">ngx-components works!</button>`,
})
export class ButtonComponent implements OnInit {

  constructor(@Attribute("data-testid") public testId: string) {
  }

  ngOnInit(): void {}
}
