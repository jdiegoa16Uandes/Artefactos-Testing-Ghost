Feature: Iniciar una conversación

@user1 @web
Scenario: Como usuario inicio sesion 
  Given I navigate to page "https://ghost-mnkl.onrender.com/ghost/"
  And I wait for 5 seconds
  When I enter email "Pruebas-equipo-15@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "Pruebas123*"
  And I click next
  And I wait for 7 seconds