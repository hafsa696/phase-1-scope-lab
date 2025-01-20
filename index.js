// Write your solution in this file!
// Declare a global variable `customerName` and assign it the value 'bob'
var customerName = 'bob';

// Function to uppercase the global `customerName`
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
;
}
console.log('Uppercased customerName:', customerName);


// Function to set `bestCustomer` in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';  
}
console.log('Initial bestCustomer:', bestCustomer);

// Function to overwrite `bestCustomer` in global scope
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  console.log('Overwritten bestCustomer:', setBestCustomer)
  
}

const leastFavoriteCustomer = 'initial customer';

// Function to try to change `leastFavoriteCustomer` and demonstrate immutability
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'new customer'; 
  } catch (error) {
    console.error('Error:', error.message);
  }
  
}
console.log('Initial leastFavoriteCustomer:', leastFavoriteCustomer);


