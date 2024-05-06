Feature: Pruebas Ghost
    
@user11 @web
Scenario:  E11 - crear un tag
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 5 seconds
When I click on tags
    And I wait for 5 seconds
    And I click on new tag
    And I enter tag name "kraken"
    And I enter tag description "kraken - informacion"
    And I enter a color
    And I save the tag
    And I wait for 5 seconds
When I click on tags
    And I wait for 5 seconds
    And I validate the tag "kraken"

