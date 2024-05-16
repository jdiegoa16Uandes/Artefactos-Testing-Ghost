Feature: Pruebas Ghost

@user2 @web
Scenario Outline: EP02- Crear y publicar post con contenido markdown
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on posts
    And I wait for 2 seconds
    And I click on the new post
    And I wait for 2 seconds
    And I modify a text "<name>"
    And I wait for 2 seconds

    Examples:
        | name   | email              | twitter         |
        | Aslak  | aslak@cucumber.io  | @aslak_hellesoy |
        | Julien | julien@cucumber.io | @jbpros         |
        | Matt   | matt@cucumber.io   | @mattwynne      |