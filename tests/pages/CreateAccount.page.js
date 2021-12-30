const BasePage = require('./Base.page');

class CreateAccountPage extends BasePage {
    constructor(page) {
        super(page);

        //elements
        this.radioGenderMr = page.locator('#uniform-id_gender1');
        this.tfFirstname = page.locator('#customer_firstname');
        this.tfLastname = page.locator('#customer_lastname');
        this.tfPassword = page.locator('#passwd');
        this.selectDays = page.locator('#days');
        this.selectMonths = page.locator('#months');
        this.selectYears = page.locator('#years');
        //address
        this.tfAddressFirstname = page.locator('#firstname');
        this.tfAddressLastname = page.locator('#lastname');
        this.tfAddressName = page.locator('#address1');
        this.tfCity = page.locator('#city');
        this.selectState = page.locator('#id_state');
        this.tfPostCode = page.locator('#postcode');
        this.selectCountry = page.locator('#id_country')
        this.tfMobilePhone = page.locator('#phone_mobile')
        this.btnSubmitAccount = page.locator('#submitAccount');
    }

    async navigate() {
        await super.navigate('index.php?controller=authentication&back=my-account#account-creation');
    }

    async selectionMr() {
        await this.radioGenderMr.first().click();
    }

    async fillFirstname(firstname) {
        await this.tfFirstname.fill(firstname);
    }

    async fillLastname(lastname) {
        await this.tfLastname.fill(lastname);
    }

    async fillPassword(password) {
        await this.tfPassword.fill(password);
    }

    async fillDateOfBirth(day, month, year) {
        this.selectDays.selectOption({value: day});
        this.selectMonths.selectOption({value: month});
        this.selectYears.selectOption({value: year});
    }

    async fillAddressFirstname(firstname) {
        await this.tfAddressFirstname.fill(firstname);
    }

    async fillAddressLastname(lastname) {
        await this.tfAddressLastname.fill(lastname);
    }

    async fillAddressName(addressName) {
        await this.tfAddressName.fill(addressName);
    }

    async fillCity(city) {
        await this.tfCity.fill(city);
    }

    async fillState(state) {
        await this.selectState.selectOption({value: state});
    }

    async fillMobilePhone(mobilePhone) {
        await this.tfMobilePhone.fill(mobilePhone);
    }

    async fillPostCode(postCode) {
        await this.tfPostCode.fill(postCode);
    }

    async clickBtnRegister() {
        await this.btnSubmitAccount.first().click();
    }

}

module.exports = CreateAccountPage;