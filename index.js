/**
 * A class for analyzing a set of transactions.
 * @class
 */
class TransactionAnalyzer {
  /**
   * Creates a new TransactionAnalyzer instance.
   * @param {Transaction[]} transactions - The transactions to analyze.
   */
  constructor(transactions) {
    this.transactions = transactions;
  }

  /**
   * Adds a transaction to the set of analyzed transactions.
   * @param {Transaction} transaction - The transaction to add.
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  /**
   * Returns all the transactions that have been analyzed.
   * @returns {Transaction[]} The analyzed transactions.
   */
  getAllTransactions() {
    return this.transactions;
  }

  /**
   * Returns a list of the unique transaction types in the set of analyzed transactions.
   * @returns {string[]} The unique transaction types.
   */
  getUniqueTransactionType() {
    const types = new Set();
    for (const transaction of this.transactions) {
      types.add(transaction.type);
    }
    return Array.from(types).sort();
  }

  /**
   * Calculates the total amount of all the transactions in the set of analyzed transactions.
   * @returns {number} The total amount.
   */
  calculateTotalAmount() {
    let total = 0;
    for (const transaction of this.transactions) {
      total += transaction.amount;
    }
    return total;
  }

  /**
   * Calculates the total amount of all the transactions in the set of analyzed transactions that occurred on a specific date.
   * @param {number} year - The year of the date.
   * @param {number} month - The month of the date (zero-based).
   * @param {number} day - The day of the date.
   * @returns {number} The total amount.
   */
  calculateTotalAmountByDate(year, month, day) {
    const startDate = new Date(year, month - 1, day);
    const endDate = new Date(year, month - 1, day + 1);
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.date >= startDate && transaction.date < endDate) {
        total += transaction.amount;
      }
    }
    return total;
  }

  /**
   * Returns a list of all the transactions of a specific type in the set of analyzed transactions.
   * @param {string} type - The type of transaction to look for.
   * @returns {Transaction[]} The transactions of the specified type.
   */
  getTransactionByType(type) {
    const transactions = [];
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactions.push(transaction);
      }
    }
    return transactions;
  }

  /**
   * Returns a list of all the transactions in a specific date range in the set of analyzed transactions.
   * @param {Date} startDate - The start date of the range.
   * @param {Date} endDate - The end date of the range.
   * @returns {Transaction[]} The transactions in the specified date range.
   */
  getTransactionsInDateRange(startDate, endDate) {
    const transactions = [];
    for (const transaction of this.transactions) {
      if (transaction.date >= startDate && transaction.date < endDate) {
        transactions.push(transaction);
      }
    }
    return transactions;
  }

  /**
   * Returns a list of all the transactions made by a specific merchant in the set of analyzed transactions.
   * @param {string} merchantName - The name of the merchant.
   * @returns {Transaction[]} The transactions made by the specified merchant.
   */
  getTransactionsByMerchant(merchantName) {
    const transactions = [];
    for (const transaction of this.transactions) {
      if (transaction.merchant === merchantName) {
        transactions.push(transaction);
      }
    }
    return transactions;
  }

  /**
   * Calculates the average amount of all the transactions in the set of analyzed transactions.
   * @returns {number} The average amount.
   */
  calculateAverageTransactionAmount() {
    let total = 0;
    for (const transaction of this.transactions) {
      total += transaction.amount;
    }
    const average = total / this.transactions.length;
    return average;
  }

  /**
   * Returns a list of all the transactions in a specific amount range in the set of analyzed transactions.
   * @param {number} minAmount - The minimum amount.
   * @param {number} maxAmount - The maximum amount.
   * @returns {Transaction[]} The transactions in the specified amount range.
   */
  getTransactionsByAmountRange(minAmount, maxAmount) {
    const transactions = [];
    for (const transaction of this.transactions) {
      if (transaction.amount >= minAmount && transaction.amount <= maxAmount) {
        transactions.push(transaction);
      }
    }
    return transactions;
  }

  /**
   * Calculates the total debit amount of all the transactions in the set of analyzed transactions.
   * @returns {number} The total debit amount.
   */
  calculateTotalDebitAmount() {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === 'debit') {
        total += transaction.amount;
      }
    }
    return total;
  }

  /**
   * Finds the month with the most transactions in the set of analyzed transactions.
   * @returns {number} The month (zero-based) with the most transactions.
   */
  findMostTransactionsMonth() {
    let mostTransactions = null;
    for (const transaction of this.transactions) {
      if (!mostTransactions || mostTransactions.length < transaction.date.getMonth()) {
        mostTransactions = transaction.date.getMonth();
      }
    }
    return mostTransactions;
  }

  /**
   * Finds the month with the most debit transactions in the set of analyzed transactions.
   * @returns {number} The month (zero-based) with the most debit transactions.
   */
  findMostDebitTransactionMonth() {
    let mostTransactions = null;
    for (const transaction of this.transactions) {
      if (!mostTransactions || mostTransactions.length < transaction.date.getMonth()) {
        mostTransactions = transaction.date.getMonth();
      }
    }
    return mostTransactions;
  }

  /**
   * Returns a list of the most common transaction types, sorted by count, in the set of analyzed transactions.
   * @returns {number[]} The list of transaction types.
   */
  mostTransactionTypes() {
    const types = new Set();
    for (const transaction of this.transactions) {
      types.add(transaction.type);
    }
    const typeCounts = Array.from(types).sort((a, b) => a - b);
    return typeCounts;
  }

  /**
   * Returns a list of all the transactions before a specific date in the set of analyzed transactions.
   * @param {Date} date - The date.
   * @returns {Transaction[]} The transactions before the specified date.
   */
  getTransactionsBeforeDate(date) {
    const transactions = [];
    for (const transaction of this.transactions) {
      if (transaction.date < date) {
        transactions.push(transaction);
      }
    }
    return transactions;
  }

  /**
   * Finds a transaction by its ID in the set of analyzed transactions.
   * @param {string} id - The ID of the transaction.
   * @returns {Transaction} The transaction with the specified ID, or null if no transaction with that ID was found.
   */
  findTransactionById(id) {
    let transaction = null;
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return transaction;
  }

  /**
   * Maps the description of all the transactions in the set of analyzed transactions to a list.
   * @returns {string[]} The list of transaction descriptions.
   */
  mapTransactionDescriptions() {
    const descriptions = [];
    for (const transaction of this.transactions) {
      descriptions.push(transaction.description);
    }
    return descriptions;
  }
}

/**
 * An object that represents a transaction.
 * @typedef {{
 *   id: string,
 *   date: Date,
 *   amount: number,
 *   type: 'debit' | 'credit',
 *   description: string,
 *   merchant: string
 * }} Transaction
 */

/**
 * An array of objects that represent transactions.
 * @type {Transaction[]}
 */
const transactions = require('./transaction.json');

/**
 * The TransactionAnalyzer instance that is used to analyze the transactions.
 * @type {TransactionAnalyzer}
 */
const transactionAnalyzer = new TransactionAnalyzer(transactions);