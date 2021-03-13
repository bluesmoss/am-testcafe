import { Selector } from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('.btn.btn-primary')
        this.errorMessage = Selector('#login-error-message')

    }
}

export default new LoginPage()