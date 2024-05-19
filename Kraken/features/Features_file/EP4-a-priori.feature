Feature: Pruebas Ghost


@user4 @web
Scenario: EP04- Crear y publicar post sin titulo
Given I navigate to page "<URL>"
    And I wait for 5 seconds
When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I click login button
    And I wait for 2 seconds
    And I click on posts
    And I wait for 2 seconds
    And I click on the new post
    And I wait for 2 seconds
    And I go to content
    And I wait for 2 seconds
    And I enter content "<POST_CONTENT>"
    And I wait for 2 seconds
    And I click on button publish
    And I wait for 2 seconds
    And I click on asset publish
    And I wait for 2 seconds
    And I click on button publish post
    And I wait for 4 seconds
Then I navigate to page "<URL_PUBLISHED>"
    And I wait for 4 seconds
    And I verify the post was created with "(Untitled)"
    

