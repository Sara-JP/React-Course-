# Episode 16 — Nullish Coalescing and Logical OR

## Overview

Choose a fallback while preserving meaningful values like a count of zero.

## Learning Objectives

By the end of this session, students will be able to:

- Compare nullish and falsy defaults.
- Combine an optional lookup with a fallback.

## 1. Decide When a Value Is Missing

The nullish operator (??) uses its right operand only when the left value is null or undefined. Logical OR (||) uses the right operand for any falsy left value. Both operators evaluate the right operand only when needed.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
for (const value of [0, false, '', null, undefined]) {
    const result = value ?? 'Default Value';
    const result2 = value || 'Default Value';
    console.log(String(value).padEnd(9), JSON.stringify(result), JSON.stringify(result2));
}

const user2 = { name: 'Brad' };
console.log(user2.address?.city ?? 'Unknown');
```

Expected output:

```text
0         0 "Default Value"
false     false "Default Value"
          "" "Default Value"
null      "Default Value" "Default Value"
undefined "Default Value" "Default Value"
Unknown
```

## 3. Follow the Execution

Each row displays the input, the nullish result, and the OR result. Quoting strings makes the empty-string result visible. The last two rows agree because both null and undefined qualify for both defaults.

## 4. Hands-on Exercise

### Objective

Preserve a valid zero count.

### Tasks

1. Create a function that displays a count or the text Unknown.
2. Test it with zero, a positive number, and undefined.
3. Verify that the zero stays visible.

### Challenge

Try a profile whose city is the empty string. Decide which fallback fits a display that must always contain visible text.

## 5. Important Notes

- The difference matters for false, zero, and an empty string.
- Use parentheses when combining ?? with || or && in a single expression.

## Summary

Define missing in terms of the data. Then choose an operator that implements that definition.
