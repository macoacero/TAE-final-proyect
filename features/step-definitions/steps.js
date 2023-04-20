import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

import Welcome from '../pageobjects/welcome.page.js';
import ShareLocation from '../pageobjects/shareLocation.page.js';
import Interact from '../pageobjects/interact.page.js';
import GenieServiceModal from '../pageobjects/genieServiceModal.page.js';
import Menu from '../pageobjects/menu.page.js';
import Map from '../pageobjects/map.page.js';
import HambuergerMenu from '../pageobjects/hambuergerMenu.page.js'


// 1. Category List Test

Given(/^I open the app$/, async () => {
    await Welcome.getStartedButton.waitForDisplayed();
    await Welcome.getStartedButton.click();
});

Given(/^I skip to Share Location$/, async () => {
    await ShareLocation.skipButton.waitForDisplayed()
    await ShareLocation.skipButton.click();
});

Given(/^I go to Menu page$/, async () => {
    await Interact.skipButton2.waitForDisplayed()
    await Interact.skipButton2.click();
});

Given(/^I go to Map page$/, async () => {
    await Menu.mapButton.waitForDisplayed();
    await Menu.mapButton.click();
});

Given(/^I close the Genie Service Modal$/, async () => {
    await GenieServiceModal.closeButton.waitForDisplayed({ timeout: 10000 })
    await GenieServiceModal.closeButton.click();
});

Given(/^I Tap Map Button$/, async () => {
    await Map.categoryTitleButton.waitForDisplayed();
    await expect(Map.mapContainer).isDisplayed();
});

When(/^I Tap Category List$/, async () => {
    await Map.categoryTitleButton.waitForDisplayed();
    await Map.categoryTitleButton.click();
});

Then(/^I Check if the Hotels Option is available in the list$/, async () => {
    const element = await Map.hotelsItem.findElement();
    const listItemElements = await Map.categoryList.findElements();
    let foundElement = null;
    for (const listItemElement of listItemElements) {
        if (listItemElement === element) {
            foundElement = listItemElement;
            break;
        }
    }

    foundElement.isDisplayed() ? foundElement.click() : console.log('Item not found');
});

// 2. Privacy & Legal

Given(/^I Tap on Menu Button available in Dashboard Page$/, async function () {
    await Menu.hambuegerButton.click();
});

Given(/^I Scroll down until bottom of the screen$/, async function () {
    await driver.touchAction([{ action: 'longPress', x: 30, y: 500 }, { action: 'moveTo', x: 268, y: 1880 }, 'release'])
});

Given(/^I Tap on Privacy & legal$/, async function () {
    await HambuergerMenu.privacyButton.waitForDisplayed();
    await HambuergerMenu.privacyButton.click();
});

Then(/^I can see a list of options$/, async function (dataTable) {
    await PrivacyAndLegal.privacyList.waitForDisplayed();
    const obtainedList = await Promise.all(PrivacyAndLegal.privacyList.map(elemento => elemento.getText()));
    const expectedList = dataTable.rawTable.flat();
    await expect(obtainedList).to.deep.equal(expectedList);
});

// Add Plans option

Given(/^I Tap Add Plans Button available in Dashboard Page$/, async function () {
    await Menu.plansButton.click();
});

Then(/^I Check if the Reserve Dining Option is in the list$/, async function () {
    const text = "Reserve Dining";
    const listItemElements = await Plans.plansList.findElements();
    let foundElement = null;
    for (const listItemElement of listItemElements) {
        if (listItemElement.getText() === text) {
            foundElement = listItemElement;
            break;
        }
    }
    foundElement.isDisplayed() ? console.log(`${foundElement} is displayed`) : console.log('Item not found');
});
