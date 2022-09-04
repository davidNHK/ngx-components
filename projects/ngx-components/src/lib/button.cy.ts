import { mount } from 'cypress/angular';

import { describe, it } from '../test-helpers/test-runner';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  it('Button mount', () => {
    mount(ButtonComponent);
  });
});
