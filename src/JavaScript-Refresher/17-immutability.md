# Episode 17 — Immutable Updates and Spread

## Overview

Update a list of titles and a user record while preserving their earlier values. This is the update pattern used when those values are held in React state.

## Learning Objectives

By the end of this session, students will be able to:

- Contrast push with an array spread.
- Replace one item or one property in a fresh container.

## 1. Compare Mutation with Copying

Push appends to the same array. Spread in an array literal copies elements into a new array. Object spread copies own enumerable properties into a new object, and a later property with the same key overrides the copied value.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const notes3 = ['Meeting notes', 'Grocery list'];
const alias = notes3;
notes3.push('Workout Plan');
console.log(alias.length, alias === notes3);

const notes4 = ['Meeting notes', 'Grocery list'];
const newNotes = [...notes4, 'Workout Plan'];
const changeNotes = notes4.map(note => note === 'Grocery list' ? 'Shopping list' : note);
console.log(notes4.join(', '));
console.log(newNotes.join(', '));
console.log(changeNotes.join(', '));

const user3 = { name: 'Brad', age: 30 };
const newUser = { ...user3, age: 31 };
console.log(user3.age, newUser.age);
```

Expected output:

```text
3 true
Meeting notes, Grocery list
Meeting notes, Grocery list, Workout Plan
Meeting notes, Shopping list
30 31
```

## 3. Follow the Execution

The alias sees the pushed item because both names point to one array. The other two array updates produce new arrays, leaving notes4 unchanged. The new user retains the name and receives the later age value.

## 4. Hands-on Exercise

### Objective

Update a note in React style.

### Tasks

1. Create an array containing two note objects.
2. Map over it and copy only the matching note with a changed title.
3. Verify that the original note has its old title and the new one has the edited title.

### Challenge

Add a nested address object. Update its city while preserving both the original user and the original address.

## 5. Important Notes

- Spread is shallow. Copy each nested level whose contents you change.
- For React state, pass the new value to the state setter. Mutating an array and passing the same reference can cause React to skip the update.

## Summary

Create a new container along the changed path so earlier state remains usable.
