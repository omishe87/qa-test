Feature: Count new clicks

    @loggedIn
    Scenario: Look for current amount of clicks
        Then I see amount of click on analytic page

    @loggedIn
    Scenario: New click was added in report after generated click
        When I go to default url
        Then new click is shown in report