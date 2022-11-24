import { t } from 'testcafe'

class SearchServices {
    constructor () {}

    async fetchActivites(text, offset, limit, sortBy = "-relevance") {
        const results = await t.request({
            url: "https://fe-apiproxy.musement.com/activities",
            method: "GET",
            params: {
                offset: offset,
                limit: limit,
                sort_by: sortBy,
                text: text
            }
        });
        await t
            .expect(results.status).eql(200)
            .expect(results.statusText).eql('OK')
        return results;
    }
}

export default new SearchServices();