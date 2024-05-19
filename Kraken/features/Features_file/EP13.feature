Feature: Pruebas Ghost


@user13 @web
Scenario: E13 validar el color de un post
Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 5 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP13_1_login"
    And I click login button
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP13_2_dashboard"
    And I wait for 2 seconds
    When I click on tags
    And I wait for 5 seconds
    And I take a screenshot in "G5" with the name as "EP13_3_tags"
    And I click on new tag
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP13_4_new_tag"
    And I wait for 2 seconds
    And I save the tag
    And I wait for 10 seconds
    And I take a screenshot in "G5" with the name as "EP13_5_restriction"
    And I verify the restriction
    


    