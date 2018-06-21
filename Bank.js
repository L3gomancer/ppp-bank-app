class Bank {
  constructor() {
    this.state = {
      balance: 0,
      transactions: []
    };
  }

  getBalance() {
    return this.state.balance;
  }

  changeBalance(dep) {
    this.state.balance += dep;
    return this.state.balance;
  }

  makeDeposit(amount) {
    const trans = {
      type: "deposit",
      account: amount
    };
    this.state.transactions.push(trans);
    return trans;
  }
}

module.exports = new Bank();
