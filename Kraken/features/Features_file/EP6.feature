Feature: Pruebas Ghost


@user6 @web
Scenario: EP06 - Modificar titulo post existente
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP6_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP6_2_dashboard"
    And I click on posts published
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP6_3_postsPublished"
    And I click on a specific post
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP6_4_postSelected"
    And I modify a title "$string_061"
    And I wait for 4 seconds
    And I take a screenshot in "G5" with the name as "EP6_5_modifiedTitle"
    And I click on button update
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP6_6_postUpdated"
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I take a screenshot in "G5" with the name as "EP6_7_postsUpdated"
    And I verify the title was modified with "$$string_061"


