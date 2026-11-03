# Episode 20 — Async, Await, and Error Handling

## Overview

Rewrite the post-reading chain as an async function. Compare the line that waits for headers with the line that waits for the parsed body.

## Learning Objectives

By the end of this session, students will be able to:

- Use await to retrieve a fulfilled promise's value.
- Catch a rejected operation and explain why the caller can continue running.

## 1. Read the Function in Order

Calling an async function always produces a promise. Await suspends that function until the awaited value is ready and lets other work proceed. A rejection at an awaited expression acts like a thrown error inside the surrounding try block.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const sampleURL = 'data:application/json,' +
    encodeURIComponent(JSON.stringify({ id: 1, title: 'Meeting Notes' }));

const fetchData = async url => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        console.log(data.id, data.title);
    } catch (error) {
        console.log('Could not load post:', error.message);
    }
};

console.log('Request started');
const pending = fetchData(sampleURL);
console.log('Caller continues');
await pending;
console.log('Request finished');
```

Expected output:

```text
Request started
Caller continues
1 Meeting Notes
Request finished
```

## 3. Follow the Execution

The caller prints its second message while fetchData is waiting. Inside the function, response is available after the first await, and the post object after the second. The final log runs only after pending settles. The top-level await works because this example runs as an ES module.

## 4. Hands-on Exercise

### Objective

Compare success and failure paths.

### Tasks

1. Run the offline example and identify the two lines printed before the post.
2. Pass a data URL containing malformed JSON and observe the catch message.
3. Use the course URL 'https://jsonplaceholder.typicode.com/posts/1' to read a live post when internet access is available.

### Challenge

Refactor fetchData to return the parsed post and move the success log to its caller. Decide whether to rethrow errors or return an explicit fallback.

## 5. Important Notes

- The catch handles errors locally. With no explicit return or rethrow, this function fulfills with undefined even after logging an error.
- Await pauses the current async function. It does not freeze the page or block the whole JavaScript runtime.

## Summary

The same two promises appear in the chain and await versions. Await expresses their dependency in the order you read the statements.
