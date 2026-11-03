# Episode 11 — Higher-Order Functions and map

## Overview

Create a numbered list of note titles while retaining the original note objects for later use.

## Learning Objectives

By the end of this session, students will be able to:

- Identify the callback and the higher-order function.
- Use a map callback's value and index to produce new elements.

## 1. Transform Each Item

A higher-order function takes a function as an argument or returns a function. The array method map takes a callback, invokes it for each present item, and places each returned value in the corresponding position of a new array.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const notes = [
    { title: 'Meeting Notes' }, { title: 'Grocery List' },
    { title: 'Workout Plan' }, { title: 'Recipe Idea' },
];
const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);
console.log(noteTitles.join('\n'));
console.log(notes[0].title);
```

Expected output:

```text
1. Meeting Notes
2. Grocery List
3. Workout Plan
4. Recipe Idea
Meeting Notes
```

## 3. Follow the Execution

The first callback receives index 0 and produces a label starting with 1. The source still contains objects. The result contains strings, so code that consumes the labels does not need to access a title property.

## 4. Hands-on Exercise

### Objective

Produce labels in another format.

### Tasks

1. Return labels such as Note 1 — Meeting Notes.
2. Print the result length and compare it with the input length.
3. Inspect the first object to confirm its title remained unchanged.

### Challenge

Replace the expression body with braces and omit return. Inspect the mapped array, then fix the callback.

## 5. Important Notes

- Pass the callback itself. Calling it when passing the argument gives map its result instead.
- Map creates a new array, but a callback can still mutate the input objects if it writes to them.

## Summary

Use map when each input position should produce a corresponding output position.
