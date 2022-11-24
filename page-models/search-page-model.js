import { Selector } from 'testcafe';
import { t } from 'testcafe'

class SearchPage {
    constructor () {
        this.searchInputSelector = Selector("div[data-test='homePage-hero']").find("input[type='search']");
        this.searchButtonSelector = Selector("div[data-test='homePage-hero']").find("button[data-test='autocomplete__search-button']");
        this.resultsCardsSelectors = Selector("div[class='col newCards_scY1E']");
        this.titleLink = Selector("a[data-test='ActivityCard__title-link']");
    }

    async searchFor(title) {
        await t
        .typeText(this.searchInputSelector, title)
        .click(this.searchButtonSelector)
    }
}

export default new SearchPage();