describe('My First Test', () => {
  
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Home')
    cy.contains('Profile')
    cy.contains('Login')
    cy.contains('Signup')

  })
  it('Routes', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Home')
    cy.contains('Profile').click()
    cy.url().should('include', '/profile')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.card > a').click()
    cy.url().should('include', '/signup')
    
  })
  it('Signup/Login Works', () => {
    
    cy.visit('http://localhost:4200/')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.card > a').click()
    cy.url().should('include', '/signup')
    cy.get(':nth-child(1) > #exampleInputPassword1').type('James Rottersfield').should('have.value', 'James Rottersfield')
    cy.get('#exampleInputEmail1').type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get(':nth-child(3) > #exampleInputPassword1').type('password').should('have.value', 'password')
    cy.get('.card > form.ng-valid > .btn').click()
    cy.get('#exampleInputEmail1').type('fake@email.com')
    cy.get('#exampleInputPassword1').type('password')
    cy.get('.card > form.ng-valid > .btn').click()
    cy.url().should('include', '/profile')
    cy.request('http://localhost:4200/api/newsfeed')
    
  })
  it('Profile posting through api and through text field', () => {
    
    cy.visit('http://localhost:4200/')
    cy.contains('Profile').click()
    cy.get(':nth-child(1) > .ng-untouched').type('test1')
    cy.get('app-profile > :nth-child(2) > button').click()
    cy.contains('test1')
    cy.request('POST','http://localhost:4200/api/newsfeed',{email: 'test3',password:'test4'})
    cy.get('app-profile > :nth-child(2) > button').click()
    cy.contains('test3')
  })

  it('Successfully uploads images', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Profile').click()
    cy.get(':nth-child(5) > app-file-upload > .row > .col-8 > .btn > input').selectFile('Screenshot (9).png')
    cy.get(':nth-child(5) > app-file-upload > .row > .col-4 > .btn').click()
    cy.contains('File has been uploaded')


  })
  
  it('Successfully displays image on front page', () =>{
    cy.visit('http://localhost:4200/')
    cy.contains('Screenshot (9).png')
  })
})