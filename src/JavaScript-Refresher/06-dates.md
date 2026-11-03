# Episode 6 — Timestamps and Date Formatting

## Overview

Turn a note's numeric timestamp into a label that a reader can understand. Separate the stored instant from the way the label is displayed.

## Learning Objectives

By the end of this session, students will be able to:

- Explain what `Date.now()` returns.
- Convert a timestamp to a Date and format it for display.

## 1. Store an Instant

A timestamp counts milliseconds since the Unix epoch. The same instant can have different calendar dates in different time zones. The course formatter uses the reader's locale and time zone when neither is specified.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const formatDate = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
};

const note = { title: 'Discuss project', timestamp: Date.now() };
console.log(typeof note.timestamp);
console.log(formatDate(note.timestamp).includes(' at '));

const fixed = Date.UTC(2025, 0, 2, 12, 30);
console.log(new Date(fixed).toISOString());
```

Expected output:

```text
number
true
2025-01-02T12:30:00.000Z
```

## 3. Follow the Execution

The note stores a number. The second log checks the separator without assuming a local clock or date format. To display the actual label in class, run ``console.log(`Last Edited: ${formatDate(note.timestamp)}`)`` in the same file. The fixed UTC example provides a repeatable instant.

## 4. Hands-on Exercise

### Objective

Display a note's last edit time.

### Tasks

1. Create a note with a current timestamp.
2. Print the formatted label and the UTC ISO string for that same timestamp.
3. Identify which representation reflects the local time zone.

### Challenge

Format the fixed instant for two different time zones using the `timeZone` option of `toLocaleString`.

## 5. Important Notes

- In `Date.UTC`, the month index starts at zero, so 0 means January.
- Call `Date.now()` when the edit happens to capture that moment.

## Summary

Keep the timestamp in the record and choose the display format when presenting the note.
