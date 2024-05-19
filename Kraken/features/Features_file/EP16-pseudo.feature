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
    And I enter the name of the member "<PSEUDO_MEMBER>"
    And I wait for 2 seconds
    And I enter the email of the member "<PSEUDO_MEMBER>"
    And I wait for 2 seconds
    And I enter label "<PSEUDO_MEMBER>"
    And I wait for 2 seconds
    And I enter note "<PSEUDO_MEMBER>"
    And I wait for 2 seconds
    And I save new member
    And I wait for 2 seconds
    Then I navigate to page "<URL_MEMBERS>"
    And I wait for 5 seconds
    And I verify the member was created with "<PSEUDO_MEMBER>"

