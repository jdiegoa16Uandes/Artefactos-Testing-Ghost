Feature: Pruebas Ghost


@user6 @web
Scenario: EP06 - Modificar titulo post existente
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
    And I modify a title "PSEUDO_TITLE"
    And I wait for 4 seconds
    And I click on button update
    And I wait for 3 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I verify the title was modified with "PSEUDO_TITLE"


