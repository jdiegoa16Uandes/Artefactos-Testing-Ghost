Feature: Pruebas Ghost

@user1 @web
Scenario: EP01 - Crear y publicar post
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take a screenshot in "G5" with the name as "EP1_1_login"
    And I click login button
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP1_2_dashboard"
    And I click on posts
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP1_3_post"
    And I click on the new post
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP1_4_newpost"
    And I enter title "$string_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "$string_2"
    And I wait for 2 seconds
    And I take a screenshot in "G5" with the name as "EP1_5_postcontent"
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I take a screenshot in "G5" with the name as "EP1_6_published"
    And I wait for 4 seconds
    And I verify the post was created with "$$string_1"


