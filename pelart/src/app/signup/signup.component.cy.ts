import { HttpClientModule } from '@angular/common/http'
import { SignupComponent } from './signup.component'

describe('SignupComponent', () => {
  it('mounts', () => {
    cy.mount(SignupComponent, {
      imports: [HttpClientModule]
    })
  })
})