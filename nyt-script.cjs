var https = require('https');

// Curl -> JS
https.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=80xA0tBragGQqDxOt2EMePRw2ZkIpQ1W", (res) => {
    var body = '';

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        var nytData = JSON.parse(body);
        console.log("Got a response: ", nytData);
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
})




// const nytApiKey = '80xA0tBragGQqDxOt2EMePRw2ZkIpQ1W';
// const nytApiBaseUrl = 'https://api.nytimes.com/svc';

// // this function will reach out to the NYT Most Popular articles API and return the most popular articles based on the arguements provided
// function getMostPopularArticles(metric, period, shareType) {
//     let url = `${nytApiBaseUrl}/mostpopular/v2`;

//     // period can be provided as int or a string that can be parsed to a number
//     const parsedPeriod = typeof period === 'number'
//         ? period
//         : (typeof period === 'string'
//             ? parseInt(period, 10)
//             : null);

//     if (isNaN(parsedPeriod)) {
//         throw new Error(`period: ${period} was an invalid type. Period must be a number or a string representation of a number`)  
//     } else if (parsedPeriod !== 1 && parsedPeriod !== 7 && parsedPeriod !== 30) {
//         throw new Error(`period: ${period} must be 1, 7 or 30 representing 1, 7 or 30 days in the past`)
//     }

//     // metric options are as follows: Most Emailed, Most Viewed, and Most Shared (via Facebook)
//     if (metric === 'emailed' || metric === 'viewed') {
//         url += `/${metric}`;
//         url += `/${parsedPeriod}.json`;
//     } else if (metric === 'shared') {
//         url += `/${metric}`;
//         url += `/${parsedPeriod}`;

//         // the API is set up to handle additional sharing options but currently only tracks most shared via Facebook
//         if (!!shareType && shareType === 'facebook') {
//             url += '/facebook'
//         }

//         url += '.json';
//     }
//     else {
//         throw new Error(`Invalid Metric: ${metric}. Valid options: emailed, viewed, shared`)
//     }

//     // Remember: the API will only work if you add your personal API key exactly the way the API docs say
//     url += `?api-key=${nytApiKey}`;

//     console.log(url);

//     // since we're in a commonjs script, I use the base https library
//     https.get(url, (res) => {
//         var body = '';

//         res.on('data', (chunk) => {
//             body += chunk;
//         });

//         res.on('end', () => {
//             var nytData = JSON.parse(body);
//             console.log("Got a response: ", nytData);
//         });
//     }).on('error', function (e) {
//         console.log("Got an error: ", e);
//     })
// }

// // getMostPopularArticles('viewed', 1);
// // getMostPopularArticles('shared', '30');
// // getMostPopularArticles('shared', 7, 'facebook');
// getMostPopularArticles('emailed', 1);