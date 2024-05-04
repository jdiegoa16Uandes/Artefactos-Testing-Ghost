Feature: Crear post

    @user1 @web
    Scenario: EP01 - Crear y publicar post
        Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USER>"
        And I wait for 2 seconds
        And I enter password "<PASSWORD>"
        And I click login button
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
  
    @user2 @web
    Scenario: EP19 - Crear una página con el titulo y contenido de manera correcta
      Given I navigate to page "<URL>"
      And I wait for 5 seconds
      And I enter email "<USER>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I click login button
      And I wait for 2 seconds
      And I click on pages
      And I wait for 2 seconds
      When I click on the new page
      And I wait for 2 seconds
      And I enter title "$string_19_1"
      And I wait for 2 seconds
      And I go to content
      And I wait for 2 seconds
      And I enter content "$string_19_2"
      And I wait for 2 seconds
      And I click on button publish
      And I wait for 4 seconds
      Then I navigate to page "<URL_PAGES>"
      And I wait for 4 seconds
      And I verify the page was created with "$$string_19_1"