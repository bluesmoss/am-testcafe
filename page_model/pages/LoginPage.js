import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('.btn.btn-primary').withExactText('Login')
        this.errorMessage = Selector('#login-error-message')
    }

    async submitLoginForm(username, password) {
        await t
        .typeText(this.userNameField, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)

    }
}

export default new LoginPage()