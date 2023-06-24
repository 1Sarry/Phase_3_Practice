// Asynch Ex.

console.log("first");
setTimeout(() => {
  console.log("Reading a file from DB");
}, 4000); // it doesn't wait or block it schedules a task
console.log("Second");

// schedules a task to be performed in the future
