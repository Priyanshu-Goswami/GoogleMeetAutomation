import { expect } from 'chai';
import '../../config/conf.js';
import {meetingCredentials, userCredentials }from '../../utils/helperConstants.js';
import loginPage from '../pageObjects/loginPage.js';
import mainPage from '../pageObjects/mainPage.js';
import callPage from '../pageObjects/callPage.js';
import { isElementDisplayed } from '../../utils/helperFunctions.js';

describe('Meeting Join', ()=>{
    it('Verify Meeting Join', async()=>{
        await mainPage.joinMeet(user1, meetingCredentials.meetingid);
        let participantList = await isElementDisplayed(user1, callPage.participantList);
        expect(participantList).to.be.true;
        await mainPage.joinMeet(user2, meetingCredentials.meetingid);
        participantList = await isElementDisplayed(user2, callPage.participantList);
        expect(participantList).to.be.true;
    })
})