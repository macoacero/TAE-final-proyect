Feature: Mobile testing

  @Welcome
  Scenario: As a user, I can enter the map page
    Given I Tap Map Button
    When I Tap Category List
    Then I Check if the Hotels Option is available in the list