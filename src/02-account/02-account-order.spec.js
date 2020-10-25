const Account = require("./account.js");

/* This demonstrates
 - Testing an object defined in an external file

*/

let account;

// account is initialised one before all the tests
beforeAll(function () {
  account = new Account(42);
});

describe("Bank account tested in order", function () {

  // These specs must be run in order to pass
  // without 'random: false' in jasmine.json
  // this will probably cause a failure

  it("initial balance", function () {
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(42);
  });

  it("add 2 to balance", function () {
    account.add(2);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(44);
  });

  it("withdraw 10 from balance", function () {
    account.withdraw(10);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(34);
  });

  it("withdraw 10 more from balance", function () {
    account.withdraw(10);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(24);
  });

  it("try to withdraw too much from balance", function () {
    account.withdraw(25);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(24);
  });


});
