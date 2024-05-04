Feature: Crear post

 @user1 @web
Scenario: EP01 - Crear y publicar post
  Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 2 seconds
    And I click on posts
    And I wait for 2 seconds
    When I click on the new post
    And I wait for 2 seconds
    And I enter title "$string_1"
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "$string_2"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
  Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I verify the post was created with "$$string_1"