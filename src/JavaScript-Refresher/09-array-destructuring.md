# Episode 9 — Array Destructuring and Rest

## Overview

Split a list of notes into the first item to display and the remaining items for a secondary list.

## Learning Objectives

By the end of this session, students will be able to:

- Extract an element by position.
- Collect the remaining elements in a new array.

## 1. Read the Pattern

The first name in a destructuring pattern receives the item at index zero. A rest element collects the remaining positions and must appear last.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const notes = [
    { title: 'Meeting Notes' },
    { title: 'Grocery List' },
    { title: 'Workout Plan' },
    { title: 'Recipe Idea' },
];
const [firstNote, ...otherNotes] = notes;
console.log(firstNote.title);
console.log(otherNotes.map(note => note.title).join(', '));
console.log(notes.length, otherNotes.length);
```

Expected output:

```text
Meeting Notes
Grocery List, Workout Plan, Recipe Idea
4 3
```

## 3. Follow the Execution

Reading the pattern does not remove items from the input. The first binding points to the original first object. The rest binding holds a new array containing the remaining objects in their original order.

## 4. Hands-on Exercise

### Objective

Handle lists of different lengths.

### Tasks

1. Repeat the pattern with a single note.
2. Print the first title and the remaining count.
3. Try an empty list and inspect firstNote before reading a property.

### Challenge

Skip the first position and extract only the second note using a comma in the pattern.

## 5. Important Notes

- With an empty array, the first binding is undefined and rest is an empty array.
- A new rest array still shares its element objects with the source.

## Summary

Use positions when order matters and a rest binding when the number of remaining items can vary.
