# Episode 5 — Strings and Template Literals

## Overview

Write the same greeting twice and compare how the name, age, and spaces enter the final string.

## Learning Objectives

By the end of this session, students will be able to:

- Combine strings with the plus operator.
- Embed an expression inside a template literal.

## 1. Build the Greeting

Concatenation joins consecutive pieces. A template literal uses backticks around the entire text and a dollar sign followed by braces around an expression. Spaces and punctuation outside the braces become part of the result.

## 2. Run the Example

Save the following example as `lesson.mjs` and run `node lesson.mjs` with Node.js 18 or later.

```javascript
const name = 'John';
const age = 30;
const greeting = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
const greeting2 = `Hello, my name is ${name} and I am ${age} years old`;

console.log(greeting);
console.log(greeting2);
console.log(greeting === greeting2);
```

Expected output:

```text
Hello, my name is John and I am 30 years old
Hello, my name is John and I am 30 years old
true
```

## 3. Follow the Execution

The number becomes text in both greetings. The equality check confirms that the resulting strings match character for character. In the first version, each space next to a variable belongs to a quoted piece.

## 4. Hands-on Exercise

### Objective

Report the student's age next year.

### Tasks

1. Add a template literal containing the expression age + 1.
2. Print the message for John.
3. Check that the resulting age is 31.

### Challenge

Split a template literal across two lines and inspect where the line break appears in the output.

## 5. Important Notes

- Single or double quotes keep the interpolation marker as ordinary text.
- Indentation and line breaks inside backticks are included in the value.

## Summary

Use interpolation when values or expressions need to appear at specific places within text.
