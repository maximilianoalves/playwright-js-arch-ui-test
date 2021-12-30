const BasePage = require('./Base.page');

class SignInPage extends BasePage {
    constructor(page) {
        super(page);

        //elements
        this.tfEmail = page.locator('#email');
        this.tfPassword = page.locator('#passwd');
        this.btnSubmit = page.locator('#SubmitLogin');
        this.tfEmailCreate = page.locator('#email_create');
        this.btnCreateAccount = page.locator('#SubmitCreate')

    }

    async navigate() {
        await super.navigate('index.php?controller=authentication&back=my-account');
    }

    async login(email, password) {
        await this.tfEmail.fill(email);
        await this.tfPassword.fill(password);
        await this.btnSubmit.first().click();
    }

    async insertEmailCreateAccount(email) {
        await this.tfEmailCreate.fill(email);
    }

    async clickBtnCreateAccount() {
        await this.btnCreateAccount.first().click();
    }

}

module.exports = SignInPage;