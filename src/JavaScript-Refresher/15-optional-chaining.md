# Episode 15 — Optional Chaining

## Overview

Read a city when a user profile may have no address yet.

## Learning Objectives

By the end of this session, students will be able to:

- Locate the nullable step in a property path.
- Read an optional property without throwing on a missing parent.

## 1. Place the Guard at the Nullable Value

Reading `user2.address` works on an existing user object even if that key is missing. Reading city from the resulting undefined value would throw. The operator in `address?.city` checks the address before attempting the city read.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const user2 = { name: 'Brad' };
console.log(user2.address?.city);
const completeUser = { address: { city: 'Boston' } };
console.log(completeUser.address?.city);
console.log(user2.address?.city ?? 'Unknown');
```

Expected output:

```text
undefined
Boston
Unknown
```

## 3. Follow the Execution

The missing address short-circuits to undefined. A present address allows the city lookup to proceed. In the last line the fallback converts the missing value to a display label.

## 4. Hands-on Exercise

### Objective

Handle three profile shapes.

### Tasks

1. Test a user with no address, one with a null address, and one with a city.
2. Read each city with optional chaining.
3. Verify that only the populated profile returns a city.

### Challenge

If the user variable itself may be null, where would a second optional operator go?

## 5. Important Notes

- Optional chaining checks for null and undefined specifically.
- A variable must still be declared. Optional chaining does not make an undeclared identifier safe.

## Summary

Guard the part of the path that might be absent, then decide how the application should present the missing result.
