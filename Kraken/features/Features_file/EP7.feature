Feature: Pruebas Ghost


@user7 @web
Scenario: EP07 - Modificar texto post existente
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on posts published
    And I wait for 2 seconds
    And I click on a specific post
    And I wait for 3 seconds
    And I modify a text "$string_071"
    And I wait for 4 seconds
    And I click on button update
    And I wait for 3 seconds
Then I verify the text was modified with "$$string_071"
