import { inicializacion } from "./utilitarios/login"

describe('template spec', () => {

  beforeEach(() => {

    inicializacion();
    
  })

  it('Redirigir a post', () => {

    cy.contains('Posts').click();
    cy.url().should('eq', 'https://ghost-mnkl.onrender.com/ghost/#/posts')


  })

  

  

})