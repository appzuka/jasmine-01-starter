/* This file defines the object to be tested.

   In a real application, this module would be imported
   into the application.

   The spec which tests this, account.spec.js, tests
   just this component.  Ideally, every component
   in your application will have its own spec that
   thoroughly tests it.

   Try breaking this object and see the tests fail.

*/

class Account {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  add(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    // change this condition and see the test fail.
    var allowOverdrawn = false;
    if (allowOverdrawn || (amount <= this.balance)) {
      this.balance -= amount;
      return this.balance;
    }
  }
}

module.exports = Account;
