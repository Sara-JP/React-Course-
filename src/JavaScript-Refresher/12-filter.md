# Episode 12 — Filtering Notes and Chaining map

## Overview

Build a list of just the pinned titles. Selection and transformation each have their own callback.

## Learning Objectives

By the end of this session, students will be able to:

- Use a predicate to decide which notes survive.
- Trace the input and output of a chained array method.

## 1. Select Before Transforming

Filter keeps elements for which the callback returns a truthy value. The result is a new array in the original order. Mapping that result lets the second callback work only on the selected records.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const notes = [
    { title: 'Meeting Notes', isPinned: true },
    { title: 'Grocery List', isPinned: false },
    { title: 'Workout Plan', isPinned: true },
    { title: 'Recipe Idea', isPinned: false },
];
const pinned = notes.filter(note => note.isPinned);
const pinnedNotes = pinned.map(note => note.title);
console.log(pinned.length);
console.log(pinnedNotes.join(', '));
```

Expected output:

```text
2
Meeting Notes, Workout Plan
```

## 3. Follow the Execution

The first and third notes pass the predicate. The intermediate array still contains objects, so the next callback can read their titles. The equivalent chain is `notes.filter(note => note.isPinned).map(note => note.title)`.

## 4. Hands-on Exercise

### Objective

Build a list for the unpinned tab.

### Tasks

1. Negate the pin flag in the filter callback.
2. Map the surviving objects to title strings.
3. Check that Grocery List appears before Recipe Idea.

### Challenge

Set every flag to true and run the unpinned filter again. Predict its length.

## 5. Important Notes

- Filter can return fewer items than the source, including an empty array.
- Filtering here copies the array structure and keeps references to the selected objects.

## Summary

Filter answers which notes belong in the view. Map answers what the view will display for each one.
