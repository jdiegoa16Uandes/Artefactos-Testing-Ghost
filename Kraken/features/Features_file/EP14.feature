Feature: Pruebas Ghost

@user14 @web
Scenario: E14 eliminar un tag
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 5 seconds
When I click on tags
    And I edit a tag
    And I wait for 2 seconds
Then I delete a tag
		

		


		
       
       
