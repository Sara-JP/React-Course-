# Episode 13 — Accumulating Values with reduce

## Overview

Calculate two totals with the same method: a sum of numbers and the total length of all note contents.

## Learning Objectives

By the end of this session, students will be able to:

- Identify the accumulator, current element, and initial value.
- Trace how a callback's return becomes the next accumulator.

## 1. Start from an Explicit Value

Reduce carries one result through the elements in order. The final callback result becomes the result of the method. Use an initial value of zero for these additive totals.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

const notes = [
    { content: 'Discuss project roadmap' }, { content: 'Buy Milk' },
    { content: 'Push day' }, { content: 'Pasta, Salad' },
];
const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);
console.log(totalCharacters);
```

Expected output:

```text
15
51
```

## 3. Follow the Execution

The number accumulator progresses from 0 to 1, 3, 6, 10, and 15. The content lengths are 23, 8, 8, and 12. Spaces and punctuation count toward the total.

## 4. Hands-on Exercise

### Objective

Count pinned items with a numeric accumulator.

### Tasks

1. Give each note a boolean pin flag.
2. Start at zero and add one only for a pinned note.
3. Set exactly two flags to true and verify a total of 2.

### Challenge

Try the sum on an empty array with zero as the initial value. Then remove the initial value and explain the error.

## 5. Important Notes

- Return the updated accumulator on each callback invocation.
- String length measures UTF-16 code units. The plain ASCII contents in this example each use one unit per character.

## Summary

Reduce is a good fit when later steps need one combined result from the collection.
