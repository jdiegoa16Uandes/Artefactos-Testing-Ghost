Feature: Pruebas Ghost


@user9 @web
Scenario: EP09 - Hacer Unpublish
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP9_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP9_2_dashboard"
    And I click on posts published
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP9_3_postsPublished"
    And I click on a specific post
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP9_4_postSelected"
    And I modify a title "$string_091"
    And I wait for 4 seconds
    And I take a screenshot in "G5" with the name as "EP9_5_modifiedTitle"
    And I click on button update
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP9_6_postUpdated"
    And I click on button unpublish
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP9_7_confirmUnpublish"
    And I confirm unpublish
    And I wait for 3 seconds
    And I take a screenshot in "G5" with the name as "EP9_8_postUnpublished"
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 3 seconds
    And I verify title is not in published with title "$$string_091"
