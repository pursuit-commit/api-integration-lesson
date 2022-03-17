import got from 'got';

export class NytIntegrationService {
    apiKey;
    nytApiBaseUrl = 'https://api.nytimes.com/svc';

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getMostPopularArticles(metric, period, shareType) {
        let url = `${this.nytApiBaseUrl}/mostpopular/v2`;

        if (metric === 'emailed' || metric === 'viewed') {
            url += `/${metric}`;
            if (typeof period === 'number' || typeof period === 'string') {
                url += `/${period}.json`;
            }
        } else if (metric === 'shared') {
            if (typeof period === 'number' || typeof period === 'string') {
                url += `/${period}`;
                if (!!shareType && shareType === 'facebook') {
                    url += '/facebook'
                }
                url += '.json';
            }
        } else {
            throw new Error(`Invalid Metric: ${metric}. Valid options: emailed, viewed, shared`)
        }

        url += `?api-key=${this.apiKey}`;

        console.log(url);

        return await got.get(url, { }).json();
    }

    
}