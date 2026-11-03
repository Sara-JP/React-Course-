# Episode 10 — Object Destructuring and Nested Patterns

## Overview

Read a note title under a local name, then extract a city and hobbies from a nested user record.

## Learning Objectives

By the end of this session, students will be able to:

- Rename a property while destructuring.
- Combine object and array patterns.

## 1. Match Keys and Positions

Object patterns select properties by key. The syntax `title: noteTitle` reads the key title into a local variable named noteTitle. Array patterns inside an object still select values by position.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const note3 = { title: 'Meeting Notes', isPinned: true };
const { title: noteTitle, isPinned } = note3;
console.log(noteTitle, isPinned);

const user = {
    name1: 'Ben',
    adress: { city: 'Boston', state: 'MA' },
    hobbies: ['Movies', 'Workout', 'Music'],
};
const { name1, adress: { city, state }, hobbies: [firstHobby, ...otherHobbies] } = user;
console.log(name1);
console.log(city, state);
console.log(firstHobby);
console.log(otherHobbies.join(', '));
```

Expected output:

```text
Meeting Notes true
Ben
Boston MA
Movies
Workout, Music
```

## 3. Follow the Execution

The nested pattern follows the exact key `adress` used by the course example. It binds city and state directly. The hobbies pattern takes Movies first and gathers Workout and Music into a new array.

## 4. Hands-on Exercise

### Objective

Adapt the pattern to a new user.

### Tasks

1. Rename the local binding for name1 to userName.
2. Extract the city under the local name homeCity.
3. Print userName and homeCity and check that the source keys still exist.

### Challenge

Remove the adress property and predict where the nested pattern fails. Try a default empty object for that missing property.

## 5. Important Notes

- A renamed binding does not rename the source property.
- A missing simple property produces undefined. Destructuring inside a missing or null parent throws unless handled.

## Summary

Object keys describe which data to read. Local names describe how the rest of the program will use it.
