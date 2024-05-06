Feature: Pruebas Ghost

		
@user15 @web
Scenario: E15 - crear un tag interno
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 5 seconds
When I click on tags
    And I wait for 5 seconds
    And I create tag intern
    And I click on new tag
    And I enter tag name "kraken-interno"
    And I enter tag description "kraken-interno"
    And I enter a color
    And I save the tag
    And I wait for 5 seconds
When I click on tags
    And I wait for 5 seconds
    And I create tag intern
    And I wait for 5 seconds
    And I validate the tag "raken-interno"
		


		
       
       
