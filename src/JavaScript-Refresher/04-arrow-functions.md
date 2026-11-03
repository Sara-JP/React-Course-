# Episode 4 — Arrow Functions and this

## Overview

Use a short arrow for a calculation, then compare a regular method with an arrow stored on an object.

## Learning Objectives

By the end of this session, students will be able to:

- Recognize an expression body and an implicit return.
- Predict how an arrow obtains its `this` value.

## 1. Read an Arrow

Parameters appear before the arrow. An expression body returns its result automatically. A block body uses braces and needs an explicit return when a result is required. Empty parentheses indicate zero parameters.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const getRectangleArea = (width, height) => width * height;
const sayHello = () => console.log('Hello, World!');
console.log(getRectangleArea(5, 10));
sayHello();

const numbers5 = [1, 2, 3, 4, 5];
const double = numbers5.map(function (number) { return number * 2; });
const double2 = numbers5.map(number => number * 2);
console.log(double.join(', '));
console.log(double2.join(', '));

const person = {
    name: 'Brad',
    sayHelloRegular() { console.log(this.name); },
    sayHelloArrow: () => console.log(this),
};
person.sayHelloRegular();
person.sayHelloArrow();
```

Expected output:

```text
50
Hello, World!
2, 4, 6, 8, 10
2, 4, 6, 8, 10
Brad
undefined
```

## 3. Follow the Execution

Both callbacks return twice the current number. Calling the regular method through `person` supplies that object as its receiver. The arrow captures the surrounding module's top-level `this`, which is undefined.

## 4. Hands-on Exercise

### Objective

Rewrite a callback without changing its result.

### Tasks

1. Convert the doubling arrow to a block body with return.
2. Compare the output of the two map calls.
3. Remove return temporarily and inspect the resulting array directly.

### Challenge

Define an arrow inside the regular method. Have it read `this.name` and explain why the nested arrow can print Brad.

## 5. Important Notes

- Run this example as an ES module for the displayed result. Top-level `this` depends on the execution environment.
- To return an object literal implicitly, wrap it in parentheses, as in `n => ({ value: n })`.

## Summary

Arrow syntax can shorten callbacks. Where the arrow is defined determines what it sees as `this`.
