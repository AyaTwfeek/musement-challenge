import searchPage from '../page-models/search-page-model';
import searchService from '../api-services/search-services';

fixture`Search with non empty text`
    .page`https://www.musement.com/uk/`;

test('When click on search button, the result displayed on UI should match the result from the API', async t => {

    // Enter the search query and click on search button
    await searchPage.searchFor("Colosseum")
    
    // Call the /activies with the same paramter as the frontend 
    const results = await searchService.fetchActivites("Colosseum", 0, 20)

    // Map the resutned date to be in the same formate for the titles in the UI '{CITY} - {TITLE}'
    const titles = await results.body.data.map(function(item){ return item.city.name + " - " +  item.title});

    // Assert that the number of items displayed in the UI is equal to the number of items returned from the API
    await t
        .expect(searchPage.titleLink.count).eql(titles.length)
   
    // Itrate through all card's titles in the UI and collect the titles and add them to 'allTitlesOnUI' array
    var allTitlesOnUI = []
    for (let index = 0; index < titles.length; index++) {
        const nthLink = searchPage.titleLink.nth(index)
        const nthLinkState = await nthLink()
        allTitlesOnUI.push(nthLinkState.innerText)
    }

    // Assert that, the formated data collected from UI is the same as the data returned from the API
    // NOTE: the order of date that displayed in the UI is not the same as the API, so we could not assert by 't.expect(allTitlesOnUI).eql(titles)'
    // and we had to assert on the existance of each title seperatly regardless it is postion
    for (let index = 0; index < allTitlesOnUI.length; index++) {
        const element = allTitlesOnUI[index];
        await t
            .expect(titles).contains(element)
    }
    
})