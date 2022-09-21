import got from 'got';

export class NytIntegrationService {
    apiKey;
    nytApiBaseUrl = 'https://api.nytimes.com/svc';

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getMostPopularArticles(metric, period, shareType) {
        let url = `${this.nytApiBaseUrl}/mostpopular/v2`;

        // period can be provided as int or a string that can be parsed to a number
        const parsedPeriod = typeof period === 'number'
            ? period
            : (typeof period === 'string'
                ? parseInt(period, 10)
                : null);

        if (isNaN(parsedPeriod)) {
            throw new Error(`period: ${period} was an invalid type. Period must be a number or a string representation of a number`)
        } else if (parsedPeriod !== 1 && parsedPeriod !== 7 && parsedPeriod !== 30) {
            throw new Error(`period: ${period} must be 1, 7 or 30. This represents data 1, 7 or 30 days in the past`)
        }

        // metric options are as follows: Most Emailed, Most Viewed, and Most Shared (via Facebook)
        if (metric === 'emailed' || metric === 'viewed') {
            url += `/${metric}`;
            url += `/${parsedPeriod}.json`;
        } else if (metric === 'shared') {
            url += `/${metric}`;
            url += `/${parsedPeriod}`;

            // the API is set up to handle additional sharing options but currently only tracks most shared via Facebook
            if (!!shareType && shareType === 'facebook') {
                url += '/facebook'
            }

            url += '.json';
        }
        else {
            throw new Error(`Invalid Metric: ${metric}. Valid options: emailed, viewed, shared`)
        }

        // Remember: the API will only work if you add your personal API key exactly the way the API docs say
        url += `?api-key=${this.apiKey}`;

        return await got.get(url, {}).json();
    }

    async getTopStoriesBySection(section) {
        let url = `${this.nytApiBaseUrl}/topstories/v2`;
        const allowedSections = new Set([
            'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'
        ]);

        if (allowedSections.has(section)) {
            url += `/${section}.json`;
        } else {
            throw new Error(`Section: "${section}" is not an allowed value. Allowed Values are as follows: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world`);
        }


        url += `?api-key=${this.apiKey}`;

        return await got.get(url, {}).json();

        // return await this.#getWithKey(url);
    }

    // async #getWithKey(url) {
    //     url += `?api-key=${this.apiKey}`;

    //     return await got.get(url, {}).json();
    // }
}