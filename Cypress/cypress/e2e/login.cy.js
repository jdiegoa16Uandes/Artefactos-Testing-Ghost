import { inicializacion } from "./utilitarios/login"

describe('Prueba de inicio de sesión', () => {
  beforeEach(() => {

    inicializacion();
    
  })

  it('Redireccion', () => {

     cy.url().should('eq', 'https://ghost-mnkl.onrender.com/ghost/#/dashboard')
    
  })

  it('Prueba 2', () => {
   
  })

  
})