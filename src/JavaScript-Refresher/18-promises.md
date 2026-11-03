# Episode 18 — Promises, then, and catch

## Overview

Observe a delayed success and a delayed failure. Follow each result to the handler that receives it.

## Learning Objectives

By the end of this session, students will be able to:

- Distinguish pending, fulfilled, and rejected states.
- Handle success with then and failure with catch.

## 1. Describe the Lifecycle

The Promise constructor runs its executor immediately. The executor can schedule later work and return before that work finishes. Here a timer delivers a string on success or a reason on failure. A settled promise cannot switch from success to failure or back.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
function delayedMessage(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve('Promise Resolved');
            } else {
                reject(new Error('Promise Rejected'));
            }
        }, 2000);
    });
}

console.log('Starting');
delayedMessage(true)
    .then(data => {
        console.log(data);
        return delayedMessage(false);
    })
    .catch(error => console.log(error.message));
console.log('Waiting');
```

Expected output:

```text
Starting
Waiting
Promise Resolved
Promise Rejected
```

## 3. Follow the Execution

Starting and Waiting print during the initial synchronous run. After roughly two seconds the first promise fulfills. Its handler prints the data and returns a second promise, so the chain waits for it. About two seconds later that promise rejects and catch prints the reason. In the original refresher the timers start independently, so their waiting periods overlap.

## 4. Hands-on Exercise

### Objective

Trace how a chain handles failure.

### Tasks

1. Make the second call succeed and log its value in a following then.
2. Switch it back to failure.
3. Verify that the success handler is skipped on rejection and catch receives the error.

### Challenge

Throw an Error inside the first then handler. Predict whether the second timer starts and which handler sees the thrown error.

## 5. Important Notes

- Then returns another promise. Return asynchronous work from a handler when later handlers should wait for it.
- The original example rejects with text, which is valid. Using an Error also makes a stack available.
- A timer delay is a minimum scheduling delay, not an exact execution time.

## Summary

Follow the returned promise from handler to handler to explain both output order and error propagation.
