import '../../config/conf.js';
import { userCredentials } from '../../utils/helperConstants.js';
import { expect } from 'chai';
import { By } from 'selenium-webdriver';
import { isElementDisplayed } from '../../utils/helperFunctions.js';

describe('Verifying Login', () => {
    it('Login verify using user credentials', async () => {
        let profileBtn = await isElementDisplayed(user1, `//*[contains(@aria-label,'${userCredentials.user1.email}')]`)
        expect(profileBtn).to.be.true;
    })
})