import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'


fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`

test('Users can login using valid credentials', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(LoginPage.userNameField, 'testuser@example.com')
        .typeText(LoginPage.passwordField, 'test123')
        .click(LoginPage.loginButton)

    await t.expect(MyNotesPage.pageTitle.exists).ok()

    //await t.expect(LoginPage.errorMessage.exists).ok()

   //await t.expect(LoginPage.errorMessage.innerText).eql('The username or password are incorrect')
})

