# react-jest-exercise

Exercise based on [How to test React components using Jest and Enzyme](https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875).

Involves tests for a simple article search UI.

- Testing components with Enzyme `shallow`
- Mocking with Jest spies
- Testing UI with Jest `snapshot`
- Testing component hierarchies with Enzyme `mount`
- Testing HOC and api with Jest `mock`

## Setup

1.  Run `npm install`

You can run the tests at this point but if you want to run the dev server you'll need to:

2.  Create `config.js` file and include the following:

    ```
    export const API_KEY = "YOUR_API_KEY";
    ```

    You need to obtain the API key from the [Guardian website](http://open-platform.theguardian.com/access/) by signing up. Copy and paste your key where it says **YOUR_API_KEY**.

3.  Run `npm start` to start the server
