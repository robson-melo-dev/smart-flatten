# 🚀 Smart-Flatten: Flatten Your Arrays Like Never Before! 🚀

Supercharge your array flattening experience in JavaScript. Smart-Flatten is not your average array flattener; it's a Swiss army knife for dealing with nested arrays.

## Table of Contents

- [🌟 Features](#-features)
- [🛠️ How to Use](#️-how-to-use)
- [📚 Function Parameters](#-function-parameters)
- [🤝 Contribute and Support](#-contribute-and-support)

## 🌟 Features

- Deep flattening up to any depth level.
- Customizable filtering options.
- Sorting capabilities.
- Remove duplicates with a single flag.

## 🛠️ How to Use

To install the package, run:

```bash
npm install smart-flatten
```

### Basic Flattening

Flatten an array up to a given depth.

```javascript
const smartFlatten = require('smart-flatten');
const flatArray = smartFlatten([1, [2, [3, [4]]]], 3);
// Output: [1, 2, 3, 4]
```

### With Filtering

Use a filter function to keep only the elements you want.

```javascript
const flatArray = smartFlatten([1, [2, [3, [4]]]], 3, x => x > 2);
// Output: [3, 4]
```

### With Sorting

You can sort the flattened array using a custom sort function.

```javascript
const flatArray = smartFlatten([4, [1, [3, [2]]]], 3, null, (a, b) => a - b);
// Output: [1, 2, 3, 4]
```

### Remove Duplicates

Easily remove duplicate items from the flattened array.

```javascript
const flatArray = smartFlatten([1, [2, [2, [3, 3]]], 1], 3, null, null, true);
// Output: [1, 2, 3]
```

### With React

Smart-Flatten is also React-friendly. Here's how you can use it to render a nested array.

```jsx
import React from 'react';
import smartFlatten from 'smart-flatten';

const NestedList = ({ nestedArray }) => {
  const flatArray = smartFlatten(nestedArray, 3);

  return (
    <ul>
      {flatArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
```

## 📚 Function Parameters

`smartFlatten(array, depth, filterFn, sortFn, removeDuplicates)`

Here's what each parameter is for:

### `array` (required)

The array you want to flatten. It can contain nested arrays up to any level.

### `depth` (optional, default = 1)

The maximum depth to flatten. If you want to flatten all nested arrays, regardless of how deeply nested they are, you can set this to `Infinity`.

### `filterFn` (optional)

A function to filter the elements of the array. It should return `true` for elements you want to keep, and `false` for those you want to remove.

### `sortFn` (optional)

A function to sort the elements of the array. This works the same way as JavaScript's native `.sort()` method.

### `removeDuplicates` (optional, default = false)

A boolean flag to remove duplicate elements. When set to `true`, duplicates will be removed from the flattened array.

## 🤝 Contribute and Support

Love Smart-Flatten? Consider contributing to its development or donating to keep the project alive!

[Donate here](https://www.paypal.com/donate/?hosted_button_id=C2T5CHZYKXEE4) 💖

