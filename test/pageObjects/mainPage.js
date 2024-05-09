import { By, until } from "selenium-webdriver";
import callPage from "./callPage.js";
import { waitForElementDisplay } from "../../utils/helperFunctions.js";
class MainPage {
    get profileInfoBtn() {
        return "//*[contains(@aria-label, 'Google Account:')]";
    }
    get meetingLinkInput() {
        return "//*[contains(@aria-label, 'Enter a code or link')]";
    }
    get JoinBtn() {
        return "//*[contains(text(),'Join')]";
    }

    async joinMeet(driver, meetCode, mutedState = true) {
        await waitForElementDisplay(driver, this.meetingLinkInput);
        await driver.findElement(By.xpath(this.meetingLinkInput)).sendKeys(meetCode);
        await driver.findElement(By.xpath(this.JoinBtn)).click();
        if(mutedState){
            await waitForElementDisplay(driver, "//*[contains(@aria-label,'Turn off microphone')]");
            await driver.findElement(By.xpath("//*[contains(@aria-label,'microphone')]")).click();
        }
        await waitForElementDisplay(driver, this.JoinBtn, 10000);
        await driver.findElement(By.xpath(this.JoinBtn)).click();
        console.log("Meeting Joined");
    }

}

export default new MainPage();
