/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a,b) {
    return a+b;
    // write your code here
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(z) {
    return z %2===0
    // write your code here
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    // write your code here
    console.log('Hello' +' ' + name)
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    // write your code here
return age>18
}
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)

  const AdultHood=18;
  function yearsToAdulthood(age) {
    // write your code here
return ('You have' + " " +   (AdultHood - age) + " " +"years until adulthood")

  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(person) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  