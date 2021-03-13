import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import { CREDENTIALS }  from '../data/Constants'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`
    .beforeEach(async t  => {
        await t
        .click(WelcomePage.loginButton)
    })

test.only('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await t.expect(MyNotesPage.pageTitle.exists).ok()
})

test.skip('Users cannot login using invalid credentials', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('The username or password are incorrect')

})

