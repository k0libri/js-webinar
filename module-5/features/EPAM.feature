Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job - <Skill>
        Given the EPAM Career page is opened
        Then the EPAM Career page should be opened
        And the "Search Form" should be visible

        When the "Location Filter Box" is clicked
        And the "<Country>" country is selected
        And the "<City>" city is selected
        Then the "Selected Location" should be "<City>"

        When the "Skill Filter Box" is clicked
        And the "<Skill>" skill is selected
        Then the "Selected Skill" should be "<Skill>"

        When the "Search Button" is clicked
        Then the "Results" should be visible
        And the "Location of the Positions" should be "<Country>"
        And the "Apply Buttons" should be visible

        When the "First Apply Button" is clicked
        Then the "Apply Form Location" should contain "<Country>"
        And the "Apply Form Description" should contain "<Position>"

        Examples:
            | Country | City                  | Skill                 | Position           |
            | Hungary | Debrecen              | Solution Architecture | Solution Architect |
            | Belarus | All Cities in Belarus | Solution Architecture | Solution Architect |