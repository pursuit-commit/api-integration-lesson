# api-integration-lesson
Lesson Materials for 3rd party API integration - Lesson relies heavily on NYT API documentation (https://developer.nytimes.com/)


1. Decipher API documentation
- Determine if you need an API key
- Find the necessary API / API route for your needs
- Determine necessary / required inputs

2. Test via curl 
- confirm that you are in this directory
- bash ./nyt-curl.sh

3. Abstracted Implementation in js
- Example: nyt-script.cjs 
- Executed with: node ./nyt-script.cjs
- Includes direct https call and an abstracted function that allows user to send inputs to a function

4. Abstracting the functions into a integration service
- Example: nyt-integration.service.js
- Executed with: node ./nyt-fake-client.js
- Used to allow for shared resources and a solid foundation for any additional API functionality that may be added
