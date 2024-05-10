Feature: Pruebas Ghost

@user14 @web
Scenario: E14 eliminar un tag
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP14_1_login"
    And I click login button
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP14_2_dashboard"
    When I click on tags
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP14_3_tags"
    And I wait for 5 seconds
    And I edit a tag
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP15_4_delete_tag"
    And I wait for 2 seconds
    Then I delete a tag
    And I take a screenshot in "G5" with the name as "EP15_5_dashboard"

		

		


		
       
       
