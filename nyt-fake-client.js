import { NytIntegrationService } from "./nyt-integration.service.js";

const nytApiKey = '80xA0tBragGQqDxOt2EMePRw2ZkIpQ1W';
// let nytApiKey;
// const keyFlagPosition = process.argv.indexOf('-k');
// if (keyFlagPosition > -1) {
//     nytApiKey = process.argv[keyFlagPosition + 1];
//     if (!nytApiKey) {
//         throw new Error('api key must be placed directly after -k flag');
//     }
// } else {
//     throw new Error('api key not found: missing -k flag')
// }

const nytIntegrationService = new NytIntegrationService(nytApiKey);


const popularArticles = await nytIntegrationService.getMostPopularArticles('viewed', 1);
const topStories = await nytIntegrationService.getTopStoriesBySection('sports');

// console.log(popularArticles);
console.log(topStories);