const Account = require("./account.js");

/* This demonstrates
 - Testing an object defined in an external file

*/

let account;

// account is initialised before each test 
beforeEach(function () {
  account = new Account(42);
});

describe("Bank account", function () {

  it("initial balance", function () {
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(42);
  });

  it("add to balance", function () {
    account.add(2);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(44);
  });

  it("withdraw from balance", function () {
    account.withdraw(10);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(32);
  });

  it("withdraw too much from balance", function () {
    account.withdraw(43);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(42);
  });


});
