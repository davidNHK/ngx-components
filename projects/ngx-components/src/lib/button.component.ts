import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-button',
  template: `
    <p>
      ngx-components works!
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
