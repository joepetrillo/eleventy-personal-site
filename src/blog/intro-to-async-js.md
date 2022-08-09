---
title: "Asynchronous JavaScript"
date: "2022-08-09"
description: "In this post, I explain the basics of asynchronous JavaScript. This guide is meant for absolute beginners but also serves as a good refresher for any developer."
---

Asynchronous code is one of the many tricky parts of JavaScript. In this post, I explain what it is, how to work with it, and briefly how it all works under the hood. This guide is meant for absolute beginners but also serves as a good refresher for any developer. By the end of this article, you will have a high-level overview of everything you need to get started.

## Asynchronous?

First, you need to understand what asynchronous means; read the following definitions.

> not simultaneous, concurrent, or occurring at the same time

> relating to or being a computer operation that can occur independently

> refers to the occurrence of events independent of the main program flow

Zoom meetings, for example, are **not** asynchronous because they are happening live (everyone is connected simultaneously). However, prerecorded videos you watch on your own accord **are** asynchronous.

One example of a prevalent asynchronous task in computer programming is requesting data from a server. The JavaScript equivalent uses the global [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method. This operation can take considerable time to complete and should not pause (or block) program execution. While waiting for a response, the program should stay busy and use that time to complete other tasks.

## Threads

This section goes a little off-topic but will help you see the big picture.

Every computer has a CPU (central processing unit). This piece of hardware is responsible for executing instructions (code) with help from the operating system. The operating system manages all of the processes on your computer. Each of these has its own memory address space, at least a single thread, and a bunch of other things we don't need to worry about.

A thread is a point of execution in a process that determines what instructions a CPU will run. If a process has more than one thread, we consider it multi-threaded. The primary motivators of multi-threading are to improve performance or avoid blocking (like in the server example in the previous section).

However, JavaScript itself runs on a single thread. This results in only one instruction being executed at any given time. Usually, this is no big deal, but if you have some task that takes forever to complete, it will freeze the entire browser until it's done. So how is it possible to do asynchronous tasks?

## The Event Loop

The JavaScript runtime model is based on an event loop. This is responsible for executing your code, processing events, and managing queued sub-tasks. The event loop can be very complicated for beginners, so I will only focus on the parts that have to do with asynchronous code in a browser environment. The same applies to other environments like NodeJS or Deno.

When we invoke our functions, the JavaScript engine pushes them to the call stack. If you are not familiar with the stack data structure, read a quick summary of them [here](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>). When a function returns, it is popped off. If an asynchronous function is called, JavaScript hands it off to the browser, which is not single-threaded. Therefore, it's executed by the browser in a separate thread rather than being added to the call stack. As a result, **the execution of other code is not paused**. While the asynchronous function runs in the background, other functions can run as expected with no blocking behavior. When it does finish, a callback function is added to a queue. When JavaScript is eventually not busy with something else, it will take things from this queue and add them to the call stack.

![event loop](/_tmp/public/img/intro-to-async-js/event-loop.png)

Consider the following analogy. You have just been seated at a bustling restaurant. Your server is the main thread of JavaScript, each table is a function, and the kitchen is the browser. Your server has many tables to attend to (functions to run) and eventually asks what you want to order (what your function does). You order a huge steak, short ribs, and veal parmesan (a costly task). The server then leaves and goes to tell the kitchen. In the meantime, your server helps other tables and brings out ready orders. When your food is done, the kitchen will place it in the queue. Eventually, your server will return to the kitchen to check if anything is ready and bring it over to you. The process is complete.

It would be extremely slow if your server was forced to stay in the kitchen until your food was cooked. Even a quick drink refill at another table would have to wait. Notice that when your order was completed, you did not receive it **instantly**. There was a short delay since you had to wait until your server (the main thread of JavaScript) was not busy doing something else.

## Callbacks

Callbacks were the first-way developers dealt with asynchronous code in JavaScript. However, callbacks can also be used in normal circumstances. See the example below.

```js
function adder(number1, number2, callback) {
  const sum = number1 + number2;
  callback(sum);
}
```

Two numbers and a callback are expected as parameters in `adder`. The callback will be invoked and passed the sum of the two numbers. Therefore, we can do the following since JavaScript supports [higher order functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function).

```js
const myCallback = (sum) => console.log(sum);
adder(2, 2, myCallback); // prints 4
```

When used for asynchronous operations, callbacks define what should eventually be executed. In the example below, JavaScript essentially tells the runtime, "notify me to run this function in 2 seconds." The process we discussed earlier occurs, and the browser keeps track of the timer, adding it to the queue in 2 seconds. When JavaScript gets a chance, it will take this function from the queue and run it.

```js
setTimeout(() => {
  console.log("this will print second");
}, 2000); // milliseconds

console.log("this will print first");
```

## Promises

Callbacks are not the only way to deal with asynchronous code. Modern JavaScript has also introduced promises. Think of these as JavaScript objects that "wrap" a function that may or may not be asynchronous. The `.then()` method attached to every promise object takes a function as a parameter. This function is invoked when the promise attached is resolved or rejected (finished running). Also, `.then()` returns another promise, so we can build a chain to carry out a sequence of tasks. See the example below.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```

In the example above, we make a call to the asynchronous [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method. Under the hood of fetch, a promise is created and returned. This promise eventually resolves (if the fetch is successful) or rejects (if there was some error). The function parameter of the `.then()` method attached to the promise will be passed the data that fetch resolves with. In this case, a response object.

This response has a `.json()` method that is also asynchronous. This method will do the same thing as fetch by creating and returning a promise that will eventually resolve with JSON data (if successful). We use `.then()` once again to finally log the data. This is not asynchronous but needs to wait until the JSON method is finished to be executed. Also, notice the `.catch()` method. This will catch any error that may occur during any previously chained `.then()`. There is more to learn about promises, but these are the basics to get you going.

## Async Await

Lastly, we have another way of dealing with asynchronous code in JavaScript, typically referred to as `async await` syntax. This is an even more modern approach and is syntactic sugar over promises. See the example below, which mirrors what we just did.

```js
async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
```

This looks a lot more like the regular synchronous code we are used to. It is easier to read but still uses promises behind the scenes. `await` will suspend the function execution until each promise settles. First, we wait for the response from `fetch`, and then we wait for the JSON to be parsed. To use the `await` keyword, we must be inside an `async` function. Overall, this choice makes writing code more elegant and is personally my go-to choice.

There is a lot more you can dive into, but I hope this post gave you a clear overview of what asynchronous code is and your options for writing it in JavaScript. Thanks for reading!

## Other Resources

- [MDN Introducing Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Intro to Callbacks](https://javascript.info/callbacks)
- [Intro to Promises](https://javascript.info/promise-basics)
- [Intro to Async/Await](https://javascript.info/async-await)
