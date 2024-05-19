Feature: Pruebas Ghost


@user16 @web
Scenario: EP16 - Crear un miembro con datos básicos validos
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on members
    And I wait for 2 seconds
    When I click on the new member
    And I wait for 5 seconds
    And I enter the name of the member "$name_16_1"
    And I wait for 2 seconds
    And I enter the email of the member "$email_16_1"
    And I wait for 2 seconds
    And I enter label "$string_16_2"
    And I wait for 2 seconds
    And I enter note "$string_16_3"
    And I wait for 2 seconds
    And I save new member
    And I wait for 2 seconds
    Then I navigate to page "<URL_MEMBERS>"
    And I wait for 5 seconds
    And I verify the member was created with "$$name_16_1"

