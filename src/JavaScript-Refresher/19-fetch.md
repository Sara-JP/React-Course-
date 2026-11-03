# Episode 19 — Fetching JSON with Promise Chains

## Overview

Read a post in two asynchronous steps. First obtain a response, then parse its body. Use an offline response for a repeatable lesson and the course endpoint for the network exercise.

## Learning Objectives

By the end of this session, students will be able to:

- Distinguish a Response from the parsed JSON value.
- Check HTTP status before trying to use the body.

## 1. Read the Response

Fetch fulfills with a Response when an HTTP response is available, including responses such as 404. The ok property is true for statuses from 200 through 299. Calling json() reads the body and returns a promise for the parsed value.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const samplePost = { id: 1, title: 'Meeting Notes' };
const sampleURL = 'data:application/json,' +
    encodeURIComponent(JSON.stringify(samplePost));

function readPost(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .then(post => console.log(post.id, post.title))
        .catch(error => console.log(error.message));
}

readPost(sampleURL);
```

Expected output:

```text
1 Meeting Notes
```

## 3. Follow the Execution

The data URL contains a known JSON body, so fetch can exercise the same Response and parsing steps without internet access. Returning response.json() passes its eventual result to the next handler. With a remote URL, the response arrives over the network.

## 4. Hands-on Exercise

### Objective

Request the post from the course endpoint.

### Tasks

1. Replace sampleURL in the call with 'https://jsonplaceholder.typicode.com/posts/1' and run with internet access.
2. Inspect the returned id and title. The title comes from the server.
3. Request an absent post and inspect the HTTP status if the server returns an error response.

### Challenge

Change the offline body to invalid JSON. Predict whether the status check or the parsing step sends the error to catch.

## 5. Important Notes

- Network failures can reject fetch directly. An HTTP error status needs an explicit check.
- The catch shown here logs and handles the error. A caller that needs to handle failure itself should receive a rejection instead.

## Summary

Returning each asynchronous step lets one chain handle transport errors, unsuccessful HTTP responses, and invalid JSON.
