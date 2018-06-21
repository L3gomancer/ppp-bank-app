const { assert } = require("chai");
const bank = require("./Bank");

describe("Bank", () => {
  describe("this should get balance", () => {
    it("balance should equal zero", () => {
      assert.equal(bank.getBalance(), 0);
    });
  });
  describe("this should increment the balance", () => {
    it("the balance should equal 50", () => {
      assert.equal(bank.changeBalance(50), 50);
    });
  });
  describe("this trasaction should have a type of - deposit", () => {
    it("the transaction type should equal deposit", () => {
      assert.equal(bank.makeDeposit("12345").type, "deposit");
    });
  });
  describe('this transaction should have the account number "12345"', () => {
    it('the transaction account number should equal "12345"', () => {
      assert.equal(bank.makeDeposit("12345").account, "12345");
    });
  });
});
