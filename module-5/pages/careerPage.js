
class CareersPage {
    constructor() {
        this.workWithUsTitle = $(".title h1");
        this.searchForm = $("#jobSearchFilterForm");
        this.locationFilterBox = $(".recruiting-search__location > span[dir*='ltr']");
        this.locationFilterBoxIsOpen = $("span[dir*='ltr'][class*=open]")
        this.countryIsOpen = country => $(`li[aria-label='${country}'] ul[class*=open]`)
        this.selectLocationCountry = location => $(`li[aria-label='${location}']`);
        this.selectLocationCity = city => $(`li[id$='${city}']`);
        this.selectAllCity = all => $(`li[title='${all}']`)
        this.skillFilterBox = $("div[class*='job-search__departments']");
        this.skillFilterIsOpen = $("div[role='combobox'][aria-expanded='true'] div[class='multi-select-dropdown']");
        this.skillSelect = skill => $(`.multi-select-dropdown-container input[data-value='${skill}'] ~ span`);
        this.selectedSkill = skill => $(`.selected-items .filter-tag[data-value='${skill}']`);
        this.selectedLocation = location => $(`.selection span[title='${location}']`);
        this.searchButton = $("button[type='submit']");
        this.loadingIsDone = $("div.preloader[style$='none']")
        this.results = $$("ul.search-result__list > li");
        this.applyButton = $$(".search-result__item-apply");
        this.firstApplyButton = this.applyButton.first();
        this.jobLocations = $$(".search-result__location");
        this.jobDescription = $("p.search-result__item-description");
    }
    loadPage() {
        return browser.get("https://www.epam.com/careers");
    }
    waitForElementVisibility(element) {
        return browser.wait(ec.visibilityOf(element), GLOBAL_TIMEOUT, element + ' is not visible!');
    }
    waitForElementPresent(element) {
        return browser.wait(() => (element.isPresent()), GLOBAL_TIMEOUT)
    }
    waitForElementDisplay(element) {
        return browser.wait(() => (element.isDisplayed()), GLOBAL_TIMEOUT);
    }
    waitForElementIsClickable(element) {
        return browser.wait(()=>(ec.elementToBeClickable(element)),GLOBAL_TIMEOUT);
    }
}

module.exports = new CareersPage();