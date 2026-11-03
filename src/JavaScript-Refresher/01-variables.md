# Episode 1 — Variables with const and let

## Overview

A course has a name and a lesson count. Choose a declaration for each by asking whether the variable will receive a new value.

## Learning Objectives

By the end of this session, students will be able to:

- Choose between `const` and `let`.
- Trace an assignment from its right-hand side to its new value.

## 1. Declare a Binding

A declaration introduces a name in the current scope. Give a `const` binding an initial value. Use `let` when the program needs to assign another value to the same name. Both declarations are scoped to their enclosing block.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const courseName = 'JavaScript';
let lessonCount = 3;

console.log(courseName);
console.log(lessonCount);
lessonCount = lessonCount + 1;
console.log(lessonCount);
```

Expected output:

```text
JavaScript
3
4
```

## 3. Follow the Execution

The right-hand side reads the current count, adds one, and produces 4. The assignment stores that result in the existing binding. Nothing in this operation changes the course name.

## 4. Hands-on Exercise

### Objective

Track progress across two lessons.

### Tasks

1. Start a counter at zero.
2. Increment it after each lesson and print both values.
3. Check that the output is 1 followed by 2.

### Challenge

In a separate run, try assigning 'React' to `courseName`. Identify the line that raises a TypeError and explain why.

## 5. Important Notes

- A `let` declaration without an initializer starts with `undefined` once the declaration executes.
- A `const` object or array can still have its contents changed.

## Summary

Use reassignment to model a changing counter. Keep a stable binding for the course name.
