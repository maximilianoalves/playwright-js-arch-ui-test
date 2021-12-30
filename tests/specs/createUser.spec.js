const Utils = require('../utils/Utils')
const HomePage = require('../pages/Home.page');
const SignInPage = require('../pages/SignIn.page');
const CreateAccount = require('../pages/CreateAccount.page');

describe('Create an Account', () => {

    it('Create an Account with success', async () => {
        const utils = new Utils();
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);
        const createAccount = new CreateAccount(page);

        const firstname = utils.getFirstname();
        const lastname = utils.getLastName()

        await homePage.navigate();
        await homePage.clickSignIn();
        await signInPage.insertEmailCreateAccount(utils.getRandomEmail());
        await signInPage.clickBtnCreateAccount();
        await createAccount.selectionMr();
        await createAccount.fillFirstname(firstname);
        await createAccount.fillLastname(lastname);
        await createAccount.fillPassword("teste123");
        await createAccount.fillDateOfBirth("14", "5", "2000");
        await createAccount.fillAddressFirstname(firstname);
        await createAccount.fillAddressLastname(lastname);
        await createAccount.fillAddressName("rua teste, 123");
        await createAccount.fillCity("New York")
        await createAccount.selectState("32");
        await createAccount.fillPostCode("93210220");
        await createAccount.fillMobilePhone("51995484857");
        await createAccount.clickBtnRegister();
    });
});