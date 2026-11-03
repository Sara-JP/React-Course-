# Episode 8 — Short-Circuit Evaluation with Logical AND

## Overview

Decide when a welcome message should appear and inspect the actual values returned by logical AND.

## Learning Objectives

By the end of this session, students will be able to:

- Trace a short-circuit expression.
- Choose the desired return value for a logged-out user.

## 1. Evaluate from Left to Right

With two operands, logical AND returns the left operand if it is falsy. Otherwise it evaluates and returns the right operand. Common falsy values include false, null, undefined, zero, an empty string, and NaN.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
console.log(false && 'Hello');
console.log(null && 'Hello');
console.log(true && 'Hello');

const isLoggedIn = true;
function showWelcome() {
    return isLoggedIn ? 'Welcome, User' : '';
}
console.log(showWelcome());
console.log(JSON.stringify(false && 'Welcome, User'));
console.log(JSON.stringify(false ? 'Welcome, User' : ''));
```

Expected output:

```text
false
null
Hello
Welcome, User
false
""
```

## 3. Follow the Execution

The first two lines stop on the left operand. The third returns the text. The final pair makes the logged-out difference visible: the AND version gives boolean false, while the ternary gives an empty string.

## 4. Hands-on Exercise

### Objective

Make a welcome function with a predictable return type.

### Tasks

1. Pass the login flag as a function parameter.
2. Call the function with both true and false.
3. Verify with typeof that both returned values are strings.

### Challenge

Predict what `0 && 'Unread notes'` returns. Rewrite the condition so it tests whether a count is greater than zero.

## 5. Important Notes

- Truthy and falsy describe how a value behaves in a condition.
- If the left operand is falsy, a function call on the right will never run.

## Summary

Pick the expression based on the exact value the caller needs when the condition fails.
