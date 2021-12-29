const BasePage = require('./Base.page');

class SignInPage extends BasePage {
    constructor(page) {
        super(page);

        //elements
        this.tfEmail = page.locator('#email');
        this.tfPassword = page.locator('#passwd');
        this.btnSubmit = page.locator('#SubmitLogin');

    }

    async navigate() {
        await super.navigate('index.php?controller=authentication&back=my-account');
    }

    async login(email, password) {
        await this.tfEmail.fill(email);
        await this.tfPassword.fill(password);
        await this.btnSubmit.first().click();
    }

}

module.exports = SignInPage;