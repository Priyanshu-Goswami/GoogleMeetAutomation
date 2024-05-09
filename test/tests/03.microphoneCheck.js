import '../../config/conf.js';
import { expect } from "chai";
import { isElementDisplayed } from "../../utils/helperFunctions.js";
import callPage from "../pageObjects/callPage.js";
import mainPage from "../pageObjects/mainPage.js";
import { meetingCredentials } from "../../utils/helperConstants.js";

describe('Microphone', () => {
    it('Microphone Mute/Unmute ', async () => {
        //Joining Meeting
        await mainPage.joinMeet(user1, meetingCredentials.meetingid, false);
        let participantList = await isElementDisplayed(user1, callPage.participantList);
        expect(participantList).to.be.true;
        await mainPage.joinMeet(user2, meetingCredentials.meetingid, false);
        participantList = await isElementDisplayed(user2, callPage.participantList);
        expect(participantList).to.be.true;

        let micState;
        //User 1 Mutes the Mic
        await callPage.toggleMic(user1);
        micState = await isElementDisplayed(user1, callPage.unmuteBtn);
        expect(micState).to.be.true;

        //User 2 Mutes Mic
        await callPage.toggleMic(user2);
        micState = await isElementDisplayed(user1, callPage.unmuteBtn);
        expect(micState).to.be.true;

        //User 1 Unmutes 
        await callPage.toggleMic(user1);
        micState = await isElementDisplayed(user1, callPage.muteBtn);
        expect(micState).to.be.true;

        //User 2 Unmutes
        await callPage.toggleMic(user2)
        micState = await isElementDisplayed(user2, callPage.muteBtn);
        expect(micState).to.be.true;
    });
});