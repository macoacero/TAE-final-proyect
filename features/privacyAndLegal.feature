Feature: Mobile testing

  @PrivacyAndLegal
  Scenario: Verificar Lista de Elementos
  Given I Tap on Privacy & legal
  Then I can see a list of options
    | -Privacy Policy                |
    | -Terms of use                  |
    | -Supplemental Terms            |
    | and Conditions                 |
    | -Legal Notices                 |
    | -Property Rules                |
    | -Electronic Communication Disclosure      |