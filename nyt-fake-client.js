import { NytIntegrationService } from "./nyt-integration.service.js";

const nytApiKey = '80xA0tBragGQqDxOt2EMePRw2ZkIpQ1W';
const nytIntegrationService = new NytIntegrationService(nytApiKey);


const popularArticles = await nytIntegrationService.getMostPopularArticles('viewed', 1);

console.log(popularArticles);