# Episode 7 — Conditional Expressions and Note Status

## Overview

Choose a text label from two possibilities. Start with parity, then use the same decision inside a multiline note.

## Learning Objectives

By the end of this session, students will be able to:

- Evaluate a ternary expression.
- Insert a conditional status into a template literal.

## 1. Choose One Value

In `condition ? first : second`, JavaScript evaluates the condition and then evaluates only the selected branch. The whole expression produces that branch's value.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const number = 2;
const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';
console.log(message);

const note2 = {
    title: 'Meeting notes',
    timestamp: Date.UTC(2025, 0, 2),
    isPinned: false,
};
const noteText = `Title: ${note2.title}
Status: ${note2.isPinned ? '📌 Pinned Note' : '📝 Regular Note'}
Last Edited: ${new Date(note2.timestamp).toISOString()}`;
console.log(noteText);
```

Expected output:

```text
Even Number
Title: Meeting notes
Status: 📝 Regular Note
Last Edited: 2025-01-02T00:00:00.000Z
```

## 3. Follow the Execution

Dividing 2 by 2 leaves remainder zero, so the first branch wins. The note's flag is false, so the second status appears. A fixed timestamp and UTC formatting keep the classroom output reproducible.

## 4. Hands-on Exercise

### Objective

Show how data controls the label.

### Tasks

1. Change the number to 3 and the pin flag to true.
2. Predict the number label and note status.
3. Run the example and verify both changes.

### Challenge

Create a second note with a different title. Build a reusable function that formats either note without repeating the template.

## 5. Important Notes

- The percent operator computes the remainder.
- Use a ternary where the caller needs one of two values. Keep long branch logic in a separate function.

## Summary

The parity and pin examples use the same operation with different conditions and labels.
