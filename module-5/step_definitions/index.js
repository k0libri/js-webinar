const { expect } = require('chai');
const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const careerPage = require('../pages/careerPage');
const jobPage = require('../pages/jobPage');

setDefaultTimeout(GLOBAL_TIMEOUT);

Given(/^the EPAM Career page is opened$/, function () {
    return careerPage.loadPage();
});

When(/^the "([^"]+)" country is selected$/, async function (country) {
    const elementIsPresent = await (careerPage.countryIsOpen(country)).isPresent();
    if (elementIsPresent) {
        return true;
    }
    return careerPage.selectLocationCountry(country).click().then(async () => await careerPage.waitForElementPresent(careerPage.countryIsOpen(country)));
});

When(/^the "([^"]+)" city is selected$/, async function (city) {
    if (city.includes("All Cities in")) {
        await careerPage.waitForElementVisibility(careerPage.selectAllCity(city));
        return careerPage.selectAllCity(city).click().then(async () => await careerPage.waitForElementDisplay(careerPage.selectedLocation(city)));
    }
    await careerPage.waitForElementVisibility(careerPage.selectLocationCity(city));
    return careerPage.selectLocationCity(city).click().then(async () => await careerPage.waitForElementDisplay(careerPage.selectedLocation(city)));
});

When(/^the "([^"]+)" skill is selected$/, async function (skill) {
    await careerPage.waitForElementDisplay(careerPage.skillSelect(skill));
    return careerPage.skillSelect(skill).click();
});

When(/the "([^"]+)" is clicked$/, function (item) {
    switch (item) {
        case 'Location Filter Box':
            return careerPage.locationFilterBox.click().then(async () => await careerPage.waitForElementDisplay(careerPage.locationFilterBoxIsOpen));
        case 'Skill Filter Box':
            return careerPage.skillFilterBox.click().then(async () => await careerPage.waitForElementVisibility(careerPage.skillFilterIsOpen));
        case 'Search Button':
            return careerPage.searchButton.click().then(async ()=> await careerPage.waitForElementVisibility(careerPage.loadingIsDone));
        case 'First Apply Button':
            return careerPage.firstApplyButton.click().then(async () => await careerPage.waitForElementVisibility(jobPage.applyFormDescription));
        default:
            return Promise.reject(new Error('Unknown item: ' + item));
    }
});

Then(/^the EPAM Career page should be opened$/, async function () {
    const text = await careerPage.workWithUsTitle.getText();
    expect(careerPage.workWithUsTitle.isDisplayed()).to.eventually.be.true;
    expect(text).to.have.string('Work with Us');
});

Then(/^the "([^"]+)" should be visible$/, function (element) {
    switch (element) {
        case 'Search Form':
            return careerPage.searchForm.isDisplayed();
        case 'Results':
            return careerPage.results.isPresent();
        case 'Apply Buttons':
            return careerPage.applyButton.isDisplayed();
        default:
            return Promise.reject(new Error('Unknown element: ' + element));
    }
});

Then(/^the "([^"]+)" should be "([^"]+)"$/, async function (element, expected) {
    let text;
    switch (element) {
        case 'Selected Location':
            text = await careerPage.selectedLocation(expected).getText();
            return expect(text).to.have.string(expected);
        case 'Selected Skill':
            text = await careerPage.selectedSkill(expected).getText();
            return expect(text).to.have.string(expected.toUpperCase());
        case 'Location of the Positions':
            await careerPage.waitForElementVisibility(careerPage.jobLocations.last());
            text = await careerPage.jobLocations.getText();
            return text.forEach(element => expect(element).to.have.string(expected.toUpperCase()));
        default:
            return Promise.reject(new Error('Unknown element: ' + element));
    }
});

Then(/^the "([^"]+)" should contain "([^"]+)"$/, async function (element, expected) {
    let text;
    switch (element) {
        case 'Apply Form Description':
            text = await jobPage.applyFormDescription.getText();
            return expect(text).to.have.string(expected);
        case 'Apply Form Location':
            text = await jobPage.applyFormLocation.getText();
            return expect(text).to.have.string(expected.toUpperCase());
        default:
            return Promise.reject(new Error('Unknown element: ' + element));
    }
});