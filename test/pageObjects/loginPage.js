import { By } from "selenium-webdriver";
import { waitForElementDisplay } from "../../utils/helperFunctions.js";

class LoginPage {
    get signIn() {
        return "//*[contains(@aria-label, 'Sign in')][./span[contains(text(),'Sign in')]]";
    }

    get emailInput() {
        return "//*[@id='identifierId']";
    }

    get passwordInput() {
        return "//*[contains(@aria-label, 'password')]";
    }

    get nextBtn() {
        return "//*[contains(text(),'Next')]";
    }


    /**
     * login using username and password
     */

    async login(driver, email, password) {
        try {
            await driver.navigate().to("https://meet.google.com/");
            await waitForElementDisplay(driver, this.signIn);
            await driver.findElement(By.xpath(this.signIn)).click();
            await waitForElementDisplay(driver, this.emailInput);
            await driver.findElement(By.xpath(this.emailInput)).sendKeys(email);
            await driver.findElement(By.xpath(this.nextBtn)).click();
            await waitForElementDisplay(driver, this.passwordInput);
            await driver.findElement(By.xpath(this.passwordInput)).sendKeys(password);
            await driver.findElement(By.xpath(this.nextBtn)).click();
        } catch (error) {
            try {
                await driver.navigate().refresh();
                await waitForElementDisplay(driver, this.emailInput);
                await driver.findElement(By.xpath(this.emailInput)).sendKeys(email);
                await driver.findElement(By.xpath(this.nextBtn)).click();
                await waitForElementDisplay(driver, this.passwordInput);
                await driver.findElement(By.xpath(this.passwordInput)).sendKeys(password);
                await driver.findElement(By.xpath(this.nextBtn)).click();
            } catch (error) {
                throw new Error('Failed to log in:', error.message);
            }
        }
    }
}




export default new LoginPage();
