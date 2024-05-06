Feature: Pruebas Ghost


@user12 @web
Scenario: E12 - editar un tag
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 5 seconds
When I click on tags
    And I edit a tag
    And I wait for 5 seconds
    And I enter tag name "kraken-editor"
    And I enter tag description "kraken-editor -information"
    And I enter a color
    And I save the tag
    And I wait for 5 seconds
When I click on tags
    And I wait for 5 seconds
    And I validate the tag "kraken-editor"


  