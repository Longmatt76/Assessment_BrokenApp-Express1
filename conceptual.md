### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  1- Callbacks, which can get out of hand really fast and lead to code that is cluttered and   difficult to read. 
  
  2- Promises which allows for chaining of methods such as .then and .catch. 
  
  3- Aysnc await.

- What is a Promise?

  A promise is a guarantee to return a future value. When executing an asynchronous function in javascript you recieve back a promise object which can have one of theee states 'pending', 'resolved' or 'rejected'. The promise object contains methods such as .then and .catch which can be chained on once the promise is either resolved or rejected.  

- What are the differences between an async function and a regular function?

  An async function always returns a promise.


- What is the difference between Node.js and Express.js?

  Node.js is a backend runtime enviroment that allows javascript to run outside of a web browser. Express.js is a framework for building web applications that runs in Node.js. It's analogus to Python/Flask with Node being Python and Express being Flask. 

- What is the error-first callback pattern?

  An error first callback pattern means the first argument of the callback should accept an error. If an error occurs Node will supply an error object otherwise it will be null and will continue with normal operation.

- What is middleware?

  Middleware is code that runs in the middle of the request response cycle in Node.js. It has access to both the request and response and can be used for things such as logging information on each request, adding a curr_user and handling authorization and authentication. It then passes to the next route or piece of middleware by calling next.    

- What does the `next` function do?

  next() passes the req/res objects along to the next piece of middleware or route. If you don't call next() the request response cycle will stop. Including an argument in the next(e) function call will always be handled as an error.


- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  Instead of sending three seperate api requests it would be better to do them in parallel using Promise.all. There's no error handling. The naming could be a little more descriptive.  

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
