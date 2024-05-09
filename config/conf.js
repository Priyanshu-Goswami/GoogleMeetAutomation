import {
    Builder,
    Browser
} from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";
import { userCredentials } from '../utils/helperConstants.js';
import loginPage from '../test/pageObjects/loginPage.js';
import callPage from "../test/pageObjects/callPage.js";

let chromeOpts = new Options;
chromeOpts.addArguments('--start-maximized',
    '--disable-blink-features=AutomationControlled', // Hides the automation from the browser
    '--use-fake-device-for-media-stream',
    '--use-fake-ui-for-media-stream',
    '--disable-notifications',
    '--disable-popup-blocking',
    '--disable-infobars',
    '--no-default-browser-check');

// before(async () => {

// })

beforeEach(async () => {
    global.user1 = new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(chromeOpts)
        .build();

    global.user2 = new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(chromeOpts)
        .build();

    await loginPage.login(user1, userCredentials.user1.email, userCredentials.user1.password);
    await loginPage.login(user2, userCredentials.user2.email, userCredentials.user2.password);
})

afterEach(async () => {
    await callPage.endMeet(user1);
    await callPage.endMeet(user2);
    await user1.quit();
    await user2.quit();
})
