# Episode 3 — Function Declarations, Expressions, and Methods

## Overview

Apply three function forms to a small calculator. Watch when each function becomes available and how a returned result reaches the caller.

## Learning Objectives

By the end of this session, students will be able to:

- Define and call a function with parameters.
- Distinguish a declaration, a function expression, and method shorthand.

## 1. Separate Definition from Invocation

A parameter is a local name in the definition. An argument is the value supplied at the call. Parentheses invoke the function. A return statement ends that call and sends a value back.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
console.log(addNumbers(5, 3));
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const subtractNumbers = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};
console.log(subtractNumbers(5, 3));

const calculator = {
    multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    },
};
console.log(calculator.multiply(5, 3));
```

Expected output:

```text
8
2
15
```

## 3. Follow the Execution

The function declaration is available before its line executes. The subtraction expression becomes callable through its constant after initialization. The last call looks up a method on the calculator and passes 5 and 3 to it.

## 4. Hands-on Exercise

### Objective

Add one more operation to the calculator.

### Tasks

1. Define a method named divide with two parameters.
2. Return their quotient and call the method with 12 and 3.
3. Print the returned value and check that it is 4.

### Challenge

Move the subtraction call above the constant declaration. Predict the error before running the modified example.

## 5. Important Notes

- Logging a value displays it. Returning a value lets another expression use it.
- A function that reaches the end without returning a value produces `undefined`.

## Summary

Choose a declaration for a named operation, an expression for a function stored in a binding, or shorthand for an operation attached to an object.
