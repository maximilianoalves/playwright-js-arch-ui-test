const Utils = require('../utils/Utils')
const HomePage = require('../pages/Home.page');
const SignInPage = require('../pages/SignIn.page');
const CreateAccount = require('../pages/CreateAccount.page');
const MyAccountPage = require('../pages/MyAccount.page');

describe('Create an Account', () => {

    beforeEach(async () => {
        context = await global.browser.newContext()
        page = await context.newPage()
        global.page = page
    })
    
    afterEach(async () => {
        page.close()
    })

    it('Create an Account with success', async () => {
        const utils = new Utils();
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);
        const createAccount = new CreateAccount(page);
        const myAccountPage = new MyAccountPage(page);

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
        await createAccount.fillState("32");
        await createAccount.fillPostCode("93210");
        await createAccount.fillMobilePhone("51995484857");
        await createAccount.clickBtnRegister();

        let username = await myAccountPage.getUsername();
        expect(username).toEqual(`${firstname} ${lastname}`);
    });
});