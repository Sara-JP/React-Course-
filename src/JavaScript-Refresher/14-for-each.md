# Episode 14 — Visiting Items with forEach

## Overview

Print a reading list one item at a time. Compare the visible side effect with the method's own return value.

## Learning Objectives

By the end of this session, students will be able to:

- Use forEach for an action per item.
- Explain why assigning its result does not build an array.

## 1. Perform an Action

Use forEach when the purpose of iteration is an action such as logging. The callback receives the current element and can also receive the index. Its return value is discarded.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const notes = [
    { title: 'Meeting Notes' }, { title: 'Grocery List' },
    { title: 'Workout Plan' }, { title: 'Recipe Idea' },
];
const result = notes.forEach(note => console.log(note.title));
console.log(result);
```

Expected output:

```text
Meeting Notes
Grocery List
Workout Plan
Recipe Idea
undefined
```

## 3. Follow the Execution

The four titles are printed while the callbacks run. The fifth line comes from inspecting the method result after iteration finishes.

## 4. Hands-on Exercise

### Objective

Print a numbered reading list.

### Tasks

1. Add an index parameter to the callback.
2. Log a label starting at 1 for each note.
3. Verify the numbering and original order.

### Challenge

Change the callback to return the title without printing it. Compare that behavior with map using the same callback.

## 5. Important Notes

- Use map when the next step requires a new array of transformed values.
- Returning from a forEach callback ends only that invocation. It does not break the entire iteration.

## Summary

Distinguish the action performed on each item from the value returned by the array method itself.
