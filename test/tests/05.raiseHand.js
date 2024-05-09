import '../../config/conf.js';
import { expect } from "chai";
import { isElementDisplayed } from "../../utils/helperFunctions.js";
import callPage from "../pageObjects/callPage.js";
import mainPage from "../pageObjects/mainPage.js";
import { meetingCredentials } from "../../utils/helperConstants.js";

describe('Raise Hand', () => {
    it('Raise / Lower Hand in meeting', async () => {
        //Joining Meeting 
        await mainPage.joinMeet(user1, meetingCredentials.meetingid);
        let participantList = await isElementDisplayed(user1, callPage.participantList);
        expect(participantList).to.be.true;
        await mainPage.joinMeet(user2, meetingCredentials.meetingid);
        participantList = await isElementDisplayed(user2, callPage.participantList);
        expect(participantList).to.be.true;

        let handRaiseState;

        //User 1 raises Hand
        await callPage.raiseHand(user1);
        handRaiseState = await isElementDisplayed(user1, callPage.raiseHandVerify);
        expect(handRaiseState).to.be.true;
        // User 1 Lowers Hand
        await callPage.lowerHand(user1);
        //User 2 raises Hand
        await callPage.raiseHand(user2);
        handRaiseState = await isElementDisplayed(user2, callPage.raiseHandVerify);
        expect(handRaiseState).to.be.true;
        // User 2 Lowers Hand
        await callPage.lowerHand(user2);
    });
});