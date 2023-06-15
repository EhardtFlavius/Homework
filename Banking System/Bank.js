// Definirea clasei BankAccount
function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Deposited ${amount}. Current balance: ${this.balance}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds");
    return;
  }

  this.balance -= amount;
  console.log(`Withdrawn ${amount}. Current balance: ${this.balance}`);
};

BankAccount.prototype.getBalance = function () {
  return this.balance;
};

// Definirea clasei SavingsAccount
function SavingsAccount(accountNumber, balance, interestRate) {
  BankAccount.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

SavingsAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds");
    return;
  }

  BankAccount.prototype.withdraw.call(this, amount);
};

// Definirea clasei CheckingAccount
function CheckingAccount(accountNumber, balance, transactionLimit) {
  BankAccount.call(this, accountNumber, balance);
  this.transactionLimit = transactionLimit;
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function (amount) {
  if (amount > this.transactionLimit) {
    console.log("Transaction limit exceeded");
    return;
  }

  BankAccount.prototype.withdraw.call(this, amount);
};

// Funcții pentru interacțiunea cu elementele HTML
function updateSavingsBalance(balance) {
  document.getElementById("savings-balance").textContent = balance;
}

function updateCheckingBalance(balance) {
  document.getElementById("checking-balance").textContent = balance;
}

// Instantierea conturilor bancare
const savingsAccount = new SavingsAccount("SA-123456", 1000, 0.05);
const checkingAccount = new CheckingAccount("CA-789012", 2000, 1000);

// Funcții pentru manipularea conturilor bancare prin interacțiunea cu butoanele HTML
function depositSavings() {
  const amount = 1500;
  savingsAccount.deposit(amount);
  updateSavingsBalance(savingsAccount.getBalance());
}

function withdrawSavings() {
  const amount = 200;
  savingsAccount.withdraw(amount);
  updateSavingsBalance(savingsAccount.getBalance());
}

function depositChecking() {
  const amount = 700;
  checkingAccount.deposit(amount);
  updateCheckingBalance(checkingAccount.getBalance());
}

function withdrawChecking() {
  const amount = 500;
  checkingAccount.withdraw(amount);
  updateCheckingBalance(checkingAccount.getBalance());
}

// Inițializarea afișării balanțelor inițiale
updateSavingsBalance(savingsAccount.getBalance());
updateCheckingBalance(checkingAccount.getBalance());
