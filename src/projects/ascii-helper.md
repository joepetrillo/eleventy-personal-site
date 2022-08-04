---
title: "ASCII Helper"
date: "2021-10-24"
description: "Ever had to lookup an ASCII value by hand? This simple project makes that process much easier and is filled with DOM fundamentals."
---

ASCII Helper is a simple javascript project I created to quickly find the ASCII value of some given character inputted by the user. Additionally, a table with all the ASCII tables is given. I came up with the idea while learning about ASCII during my _Introduction to Systems_ class (CS230 at UMass Amherst).

[Link to Live Website](https://ascii-helper.netlify.app) | [Link to Repository](https://github.com/joepetrillo/ascii-helper)

## The Design

I started this project with a design (like most projects). In Figma, I created a simple layout, as seen below. The [final result](https://ascii-helper.netlify.app) is slightly different, but the general color scheme and structure are the same.

The CSS was reasonably simple for this design but demonstrated fundamental ideas.

![Original design desktop](/_tmp/public/img/ascii-design.png)

## The Code

All of the javascript for this project is shown below.

```js
let symbol_input = document.querySelector("#symbol-input");

function handleReset() {
  document.querySelector("#sym_decimal").innerHTML = "";
  document.querySelector("#sym_octal").innerHTML = "";
  document.querySelector("#sym_hex").innerHTML = "";
  document.querySelector("#sym_HTML").innerHTML = "";
}

function handleSymbol(val) {
  document.querySelector("#sym_decimal").innerHTML = val.charCodeAt(0);
  document.querySelector("#sym_octal").innerHTML = val
    .charCodeAt(0)
    .toString(8);
  document.querySelector("#sym_hex").innerHTML = `0x${val
    .charCodeAt(0)
    .toString(16)}`;
  document.querySelector("#sym_HTML").innerHTML = `&#38;&#35;${val.charCodeAt(
    0
  )};`;
}

symbol_input.addEventListener("input", (e) => {
  if (e.data === null) {
    // empty input
    handleReset();
  }

  if (e.data !== null) {
    // symbol was entered
    handleSymbol(symbol_input.value);
  }
});
```

### converter.js

In converter.js, I needed to take the input given by the user and display the correct corresponding ASCII value. To start, I select the input field. Then I add an event listener to the input that will trigger every time the input changes. If the input is empty (deleting the current input), it will trigger a reset that makes all the output empty. Otherwise, the input given will be passed to a function that sets the four values to their appropriate values. I decided that the decimal value, octal value, hexadecimal value, and HTML symbol would be the best four options for the converter.

```js
const table = document.querySelector("table");

const desc = {
  0: "NULL",
  1: "START OF HEADING",
  2: "START OF TEXT",
  3: "END OF TEXT",
  4: "END OF TRANSMISSION",
  5: "ENQUIRY",
  6: "ACKNOWLEDGE",
  7: "BELL",
  8: "BACKSPACE",
  9: "HORIZONTAL TAB",
  10: "LINE FEED",
  11: "VERTICAL TAB",
  12: "FORM FEED",
  13: "CARRIAGE RETURN",
  14: "SHIFT OUT",
  15: "SHIFT IN",
  16: "DATA LINK ESCAPE",
  17: "DEVICE CONTROL 1",
  18: "DEVICE CONTROL 2",
  19: "DEVICE CONTROL 3",
  20: "DEVICE CONTROL 4",
  21: "NEGATIVE ACKNOWLEDGE",
  22: "SYNCHRONOUS IDLE",
  23: "END OF TRANS BLOCK",
  24: "CANCEL",
  25: "END OF MEDIUM",
  26: "SUBSTITUTE",
  27: "ESCAPE",
  28: "FILE SEPARATOR",
  29: "GROUP SEPARATOR",
  30: "RECORD SEPARATOR",
  31: "UNIT SEPARATOR",
  32: "SPACE",
  127: "DEL",
};

for (let i = 0; i < 128; i++) {
  let row = document.createElement("tr");

  let entry1 = document.createElement("td");
  let entry2 = document.createElement("td");
  let entry3 = document.createElement("td");

  entry1.innerHTML = i;
  entry2.innerHTML = i.toString(16);

  if (desc[i]) {
    entry3.innerHTML = `[${desc[i]}]`;
  } else {
    entry3.innerHTML = String.fromCharCode(i);
  }

  row.appendChild(entry1);
  row.appendChild(entry2);
  row.appendChild(entry3);

  table.appendChild(row);
}
```

### table.js

In table.js, I needed to list every ASCII value and its corresponding value in a table. I start by selecting the table using querySelector and begin a for loop that will iterate 128 times. There are 128 ASCII values, so this number is fitting. For each iteration, we are working with some specific character. We create a row in the table and 3 entries.

- For entry 1, we insert the current decimal value (using index)
- For entry 2, we insert the current hexadecimal value (commonly used)
- For entry 3, we insert the character itself.

Entry 3 required some additional work. Since some of the characters represented by ASCII are not letters of the alphabet or numbers, I hardcoded in the other values that explain what these characters are. If a description for the current index exists, we will use that for entry 3. We finalize by appending these newly created elements to the document. We see a fully filled table.

## Conclusion

This project was a great refresher on basic DOM manipulation using JavaScript. It also helped me find ASCII values much faster than scanning through the sub-par tables I previously used online.
