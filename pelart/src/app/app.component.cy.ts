import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
describe('AppComponent', () => {
  it('mounts', () => {
    cy.mount(AppComponent, {
        imports: [HttpClientModule],

    })
    cy.get('[type="file"]').should('have.text', '')
  })
})