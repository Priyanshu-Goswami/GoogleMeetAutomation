import { By, until } from "selenium-webdriver";

export async function waitForElementDisplay(driver, selector, timeout = 2000) {
    try {
        const element = await driver.wait(until.elementLocated(By.xpath(selector)), 15000);
        await driver.sleep(timeout);
    } catch (error) {
        throw new Error(`Element ${selector} not Displayed within 15seconds`);
    }
}

export async function isElementDisplayed(driver, selector) {
    try {
        await driver.wait(until.elementLocated(By.xpath(selector)), 15000);
        await driver.sleep(2000);
        return true
    } catch (error) {
        return false;
    }
}