// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*   const External is a variable outside of the function and is in the global scope.

    function myFunction has access to the global scope and is console logging the external variable

    const internal variable is a variable inside of the function.

    nestedFunction is a function inside the parent function. and is console logging the internal variable
    
    nestedFunction() is calling the nested function

    myFunction() is calling the nested function


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation(num) {
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(summation(4));
