@Login
Feature: Launch Cashrewards and signup

    Scenario Outline: As a user, I can access Cashrewards and login

        Given I am on Cashrewards login page
        When I login with "cheannrio@outlook.com" and "UbankCodeChallenge"
        Then I should be in Cashrewards shop page
        And I logout from Cashrewards

# Example:
#         | email                 | password           |
#         | cheannrio@outlook.com | UbankCodeChallenge |