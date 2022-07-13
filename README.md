# Nosedive
An image slider app that shows posts with beautiful curated photos

## Installation

First, you need to install all the necessary dependencies. In the project directory, you can run: `yarn install`

Next, run `yarn start` to load the app in the browser.

Note: `yarn start` runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

## After implementation feedback :
> Did you encounter any issues during the implementation ? If so, were you able to bypass them?

Yes! I noticed some post were missing some vital information: the `title` and `description`. I effectively handled this exception using a clear and concise message. 


> Looking closely at the response of the API, do you think there is another way to implement the app ? If yes, what other option could exist ? If no, why not ?

Yes. I think all the data should be returned by one single endpoint. By doing so, we can avoid multiple redundant API calls within the app.

> If you were in direct contact with the API service team, what could you ask them to do to make your life easier or optimise the performances?

- Make the `posts` API to return the complete, required data for the user.
- The `media` endpoint should not contain offset and limit parameters since all it does is fetch a user media.
- Create support for fetching of individual user's post.
- Appropriately version the API

> What was the most difficult part of the implementation for you and why ?

Data management. Due to the multiple endpoint for different resources, it was hard to consolidate all the necessary data needed for a single post. 

> On a scale of 1 to 10, are you satisfied with the result? Is there anything that needs more attention?

I'll rate it an 8. I'm quite satisfied with the result. I think the `media API` needs to have a `media alternate text` included in the API response. This would be super useful for implementing accessibility appropriately. Also, I need to make the images to load fast.

> How long did it take you to implement this development ? Was it longer or shorter than what you initially expected?

I spent 2 days on this project. Its longer than what I expected.

