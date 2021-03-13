import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import { CREDENTIALS }  from '../data/Constants'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`

test('Users can login using valid credentials', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(MyNotesPage.pageTitle.exists).ok()
})

test('Users can login using invalid credentials', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(LoginPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('The username or password are incorrect')

})

