import '../../config/conf.js';
import { expect } from "chai";
import { isElementDisplayed } from "../../utils/helperFunctions.js";
import callPage from "../pageObjects/callPage.js";
import mainPage from "../pageObjects/mainPage.js";
import { meetingCredentials } from "../../utils/helperConstants.js";

describe('Reactions', () => {
    it('Verifying meeting Reactions', async () => {
        //Joining Meeting
        await mainPage.joinMeet(user1, meetingCredentials.meetingid);
        let participantList = await isElementDisplayed(user1, callPage.participantList);
        expect(participantList).to.be.true;
        await mainPage.joinMeet(user2, meetingCredentials.meetingid);
        participantList = await isElementDisplayed(user2, callPage.participantList);
        expect(participantList).to.be.true;

        let reaction;
        //Verifying Meeting Reactions. 

        //Heart
        await callPage.react(user1,'💖');
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,'💖');
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //Like
        await callPage.react(user1,"👍");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"👍");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //Celebrate
        await callPage.react(user1,"🎉");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"🎉");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //Clap
        await callPage.react(user1,"👏");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"👏");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //Laugh
        await callPage.react(user1,"😂");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"😂");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //wow
        await callPage.react(user1,"😮");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"😮");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //sad
        await callPage.react(user1,"😢");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"😢");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //thinking
        await callPage.react(user1,"🤔");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"🤔");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
        //Dislike
        await callPage.react(user1,"👎");
        reaction = await isElementDisplayed(user1,callPage.reactionVerification);
        expect(reaction).to.be.true;

        await callPage.react(user2,"👎");
        reaction = await isElementDisplayed(user2,callPage.reactionVerification);
        expect(reaction).to.be.true;
    });
});