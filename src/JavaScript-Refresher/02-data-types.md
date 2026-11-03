# Episode 2 — Numbers, Strings, Objects, and Arrays

## Overview

Describe a lesson using a duration, a title, a record, and an ordered set of topics. Each representation supports a different question about the lesson.

## Learning Objectives

By the end of this session, students will be able to:

- Distinguish numeric type from integer value.
- Read a property by name and an array element by position.

## 1. Choose a Representation

Both 20 and 1.5 are JavaScript Number values. Use `typeof` to inspect their type and `Number.isInteger` to test the value. A string holds text. An object groups named properties. An array is a specialized object whose positions start at zero.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const studentCount = 20;
const lessonDuration = 1.5;
console.log(typeof studentCount, typeof lessonDuration);
console.log(Number.isInteger(studentCount), Number.isInteger(lessonDuration));

const lessonName = 'JavaScript Basics';
console.log(typeof lessonName, lessonName.length);

const lesson = { title: 'Variables', duration: 15 };
const topics = ['Variables', 'Data Types', 'Functions'];
console.log(lesson.title, lesson.duration);
console.log(topics[0], topics.length);
console.log(typeof topics, Array.isArray(topics));
```

Expected output:

```text
number number
true false
string 17
Variables 15
Variables 3
object true
```

## 3. Follow the Execution

Both numeric values produce the same type label, but only 20 passes the integer check. The space in the lesson title counts toward its length. The first topic occupies position 0 even though the array has three entries.

## 4. Hands-on Exercise

### Objective

Represent a new lesson and inspect it.

### Tasks

1. Create a lesson with a title and a fractional duration.
2. Store two topic names in an array and print the second.
3. Check that the duration is a number and the collection is an array.

### Challenge

Predict the results of `Number.isInteger(3.0)` and `typeof '3'` before running them.

## 5. Important Notes

- String length counts UTF-16 code units. A displayed emoji can occupy more than one unit.
- Use `Array.isArray` to distinguish an array from a plain object.

## Summary

Use type checks to describe values and property or index access to retrieve the data the lesson needs.
