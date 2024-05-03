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

  @user2 @web
Scenario: Como usuario inicio sesion 
  Given I navigate to page "https://ghost-mnkl.onrender.com/ghost/"
  And I wait for 5 seconds
  When I enter email "Pruebas-equipo-15@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "Pruebas123*"
  And I click next
  And I wait for 2 seconds
  And I click on the "posts" A
  And I wait for 2 seconds
  And I click on the new post
  And I wait for 2 seconds
  And I enter title "PruebaCompleta1"
  And I wait for 2 seconds
  And I click on screen
  And I wait for 2 seconds
  And I click on button publish
  And I wait for 2 seconds
  And I click on asset publish
  And I wait for 2 seconds
  And I click on button publish post
  And I wait for 4 seconds
  Then I navigate to page "https://ghost-mnkl.onrender.com/ghost/#/posts?type=published"
  And I wait for 4 seconds
  Then I verify the post was created with "PruebaCompleta1"




