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


## BREAKOUT EXERCISE
Take a look at the Books API here: https://developer.nytimes.com/docs/books-product/1/overview
Here is the Best Sellers list API doc: https://developer.nytimes.com/docs/books-product/1/routes/lists.json/get 

1. Get an API Key: Normally you would need to generate an API key, however you can use my API key for the purposes of this exercise
2. Construct a URL that will return the current Best Sellers on the NYT best sellers list
  a. You can test this URL via curl as shown in *nyt-curl.sh*
  b. You can also test this URL in the browser
3. Now that you have tested that you can successfully access this route, take a deeper look at the documentation. 
  a. *What options are available within the Books API?*
  b. *Are these options required or optional?*
4. Write a function that takes these options as arguements and constructs the necessary URL for the Books API (similar to the function in nyt-script.cjs)
  a. Be sure to handle inputs that aren't formed correctly and *try* to handle the cases where the API does not like the URL
