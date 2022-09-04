import { mount } from 'cypress/angular'
import { ButtonComponent } from './button.component'
import {describe, it} from "../test-helpers/test-runner"

describe("ButtonComponent", () => {
  it("Button mount", () => {
    mount(ButtonComponent)
  })
})
