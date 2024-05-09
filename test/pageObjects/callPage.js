import { By, until } from "selenium-webdriver";
import { isElementDisplayed, waitForElementDisplay } from "../../utils/helperFunctions.js";
import mainPage from "./mainPage.js";

class CallPage {
    get prejoinMeetingBtn() {
        return "//*[contains(text(),'Join')]";
    }
    get microphone() {
        return "//*[contains(@aria-label,'microphone')]"
    }
    get muteBtn() {
        return "//*[contains(@aria-label,'Turn off mic')]"
    }
    get unmuteBtn() {
        return "//*[contains(@aria-label,'Turn on mic')]"
    }
    get participantList() {
        return "//*[contains(@aria-label, 'Show everyone')]";
    }
    get leaveBtn() {
        return "//button[contains(@aria-label, 'Leave call')]";
    }
    get reactionVerification() {
        return "//img[@loading= 'lazy']";
    }

    get raiseHandBtn() {
        return "//*[contains(@aria-label, 'Raise hand')]";
    }
    get lowerHandBtn() {
        return "//*[contains(@aria-label, 'Lower hand')]";
    }
    get raiseHandVerify() {
        return "(//i[contains(text(), 'front_hand')])[1]";
    }

    async toggleMic(driver, times) {
        try {
            if (times) {
                while (times > 0) {
                    await waitForElementDisplay(driver, this.microphone);
                    await driver.findElement(By.xpath(this.microphone)).click();
                    times--;
                }
            }
            else {
                await waitForElementDisplay(driver, this.microphone);
                await driver.findElement(By.xpath(this.microphone)).click();
            }
        } catch (error) {
            throw new Error('Unable to toggle Microphone. Original error: ' + error.message);
        }
    }
    async dismissSecurityPopup(driver) {
        let securityPopup = await isElementDisplayed(driver, "//span[contains(text(), 'Got it')]");
        if (securityPopup) await driver.findElement(By.xpath("//span[contains(text(), 'Got it')]")).click();
        else return;
    }
    async react(driver, emoji) {
        await this.dismissSecurityPopup(driver);
        let isReactionVisible = await isElementDisplayed(driver, `//button[@aria-label = '${emoji}']`);
        if (isReactionVisible) {
            await isElementDisplayed(driver, `//button[@aria-label = '${emoji}']`);
            await driver.findElement(By.xpath(`//button[@aria-label = '${emoji}']`)).click();
        }
        else {
            await waitForElementDisplay(driver, "//*[contains(@aria-label, 'reaction')]");
            await driver.findElement(By.xpath("//*[contains(@aria-label, 'reaction')]")).click();
            await waitForElementDisplay(driver, `//button[@aria-label = '${emoji}']`);
            await driver.findElement(By.xpath(`//button[@aria-label = '${emoji}']`)).click();
        }
    }

    async raiseHand(driver) {
        await waitForElementDisplay(driver, this.raiseHandBtn);
        await driver.findElement(By.xpath(this.raiseHandBtn)).click();
    }
    async lowerHand(driver) {
        await waitForElementDisplay(driver, this.lowerHandBtn);
        await driver.findElement(By.xpath(this.lowerHandBtn)).click();
    }

    async endMeet(driver) {
        let inCall = await isElementDisplayed(driver, this.leaveBtn);
        if (inCall) {
            await waitForElementDisplay(driver, this.leaveBtn);
            await driver.findElement(By.xpath(this.leaveBtn)).click();
            await waitForElementDisplay(driver, "//*[contains(text(),'Return to home screen')]");
            await driver.findElement(By.xpath("//*[contains(text(),'Return to home screen')]")).click();
        }
        await waitForElementDisplay(driver, mainPage.profileInfoBtn);
        await driver.findElement(By.xpath(mainPage.profileInfoBtn)).click();
        let iframe = await driver.findElement(By.name('account'));
        await driver.switchTo().frame(iframe);
        await waitForElementDisplay(driver, "(//*[contains(@href, 'accounts.google.com')])[3]");
        await driver.findElement(By.xpath("(//*[contains(@href, 'accounts.google.com')])[3]")).click();
    }
}



export default new CallPage();
