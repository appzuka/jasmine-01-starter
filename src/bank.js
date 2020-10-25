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
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    }
  }
}

module.exports = Account;
