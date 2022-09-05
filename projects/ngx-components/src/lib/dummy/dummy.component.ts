import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dummy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dummy works!
    </p>
  `,
  styles: [
  ]
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
