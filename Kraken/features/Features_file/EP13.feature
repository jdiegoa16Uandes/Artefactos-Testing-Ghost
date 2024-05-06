Feature: Pruebas Ghost


@user13 @web
Scenario: E13 crear un post vacio
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
    And I save the tag
    And I wait for 10 seconds
    And I verify the restriction


    