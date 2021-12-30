const faker = require('faker');

class Utils {

    constructor() {
        faker.locale = 'pt_BR';
    }

    getFullName() {
        return faker.name.findName();
    }

    getRandomEmail() {
        return faker.internet.email();
    }

    getFirstname() {
        return faker.name.firstName();
    }

    getLastName() {
        return faker.name.lastName();
    }
}

module.exports = Utils;