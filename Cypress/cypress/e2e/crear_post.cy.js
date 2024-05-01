import { faker } from "@faker-js/faker";
import { inicializacion } from "./utilitarios/login"


describe('template spec', () => {

  beforeEach(() => {

    inicializacion();
    
  })


  
  it('passes', () => {
   
    cy.contains('Posts').click();

    cy.contains('New post').click();

    cy.url().should('eq', 'https://ghost-mnkl.onrender.com/ghost/#/editor/post')
    cy.get('[placeholder="Post title"]').type(faker.lorem.words());

    
  })




})