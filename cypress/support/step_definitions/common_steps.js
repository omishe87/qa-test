import user from '../../fixtures/user.json'
import { Before } from 'cypress-cucumber-preprocessor/steps'

Before({ tags: '@loggedIn' }, () => cy.session(user, () => cy.login(user)))
