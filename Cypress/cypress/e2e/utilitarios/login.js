export function inicializacion() {
    cy.visit('https://ghost-mnkl.onrender.com/ghost/#/signin') // URL de inicio de sesión
    cy.get('input[name="identification"]').type('Pruebas-equipo-15@uniandes.edu.co') // Nombre de usuario
    cy.get('input[name="password"]').type('Pruebas123*') // Contraseña
    cy.get('button[type="submit"]').click() // Envío del formulario de inicio de sesión
   
  }