Feature: Pruebas Ghost


@user18 @web
Scenario: EP18 - Crear un miembro sin correo electrónico
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP18_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP18_2_dashboard"
    And I click on members
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP18_3_membersPage"
    When I click on the new member
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP18_4_memberCreate"
    And I enter the name of the member "$name_16_1"
    And I wait for 2 seconds
    And I enter label "$string_16_2"
    And I wait for 2 seconds
    And I enter note "$string_16_3"
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP18_5_memberData"
    And I save new member
    Then I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP18_6_error"
    And I verify that the missing email message is shown
