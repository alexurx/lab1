## Description of individual work

Create a console application, to analyze transactions. Individual work involves the use of classes, objects, and the use of methods for working with lists.

## Brief documentation for the project

The `TransactionAnalyzer` class is a tool for analyzing a list of transactions. It contains methods for working with transactions, such as adding a new transaction, retrieving a list of all transactions, calculating transaction totals, and others.  
The main methods are:

## constructor(transactions)
Class constructor. Accepts a list of transactions and initializes the allTransactions field.

## addTransaction(transaction)
Adds a transaction to the list of all transactions.

## getAllTransaction()
Returns a list of all transactions.

## getUniqueTransactionType()
Returns an array of unique transaction types.

## calculateTotalAmount()
Returns the total amount of all transactions.

## calculateTotalAmountByDate(year, month, day)
Returns the total amount of transactions for the specified year, month, and day.

## getTransactionByType(type)
Returns a list of transactions by the specified type.

## getTransactionsInDateRange(startDate, endDate)
Returns a list of transactions in the specified date range.

## getTransactionsByMerchant(merchantName)
Returns a list of transactions for the specified merchant.

## calculateAverageTransactionAmount()
Returns the average transaction amount.

## getTransactionsByAmountRange(minAmount, maxAmount)
Returns a list of transactions in the specified amount range.

## calculateTotalDebitAmount()
Returns the total amount of debit transactions.

## findMostTransactionsMonth()
Returns the number of the month that had the highest number of transactions.

## findMostDebitTransactionMonth()
Returns the number of the month that had the most debit transactions.

## mostTransactionTypes()
Determines which transaction type (credit or debit) predominates.

## getTransactionsBeforeDate(date)
Returns a list of transactions made before the specified date.

## findTransactionById(id)
Finds a transaction by its id.

## mapTransactionDescriptions()
Returns a list of transaction descriptions.

## There are several primitive data types in JavaScript:

Undefined: Indicates the value of a variable that has been declared but not initialized.
Boolean: Accepts only two values: true and false.
Number (Number): Represents a numeric value.
String (String): A sequence of characters.
BigInt: Used to represent very large integers.
Symbol: Introduced in ECMAScript 6, represents unique and immutable values.
Null (Null type): A special primitive used not only for data, but also as a pointer to the final point in a prototype chain.
Object: A simple structure used not only for storing data, but also for creating other structures such as arrays, maps, sets, and dates.

## Regarding array methods, the following methods can be used in the application to process and analyze data:

map(): Creates a new array by applying a function to each element of the original array.
filter(): Returns a new array containing only those elements that satisfy the given condition.
reduce(): Applies the function to the accumulator and each element of the array, returning a single value.
forEach(): Executes the specified function for each element of the array.
sort(): Sorts the elements of the array.
find(): Returns the first element that satisfies the specified condition.
some() and every(): Checks whether at least one or all elements of the array satisfy the given condition.

## The role of the class constructor
The role of the class constructor is to create and initialize objects created using the class. The constructor allows for initial initialization, which must be done before other methods can be called. A class can have only one method named "constructor". If the class is derived, the constructor by default calls the parent constructor, passing the arguments that were provided.

## To create a new instance of a class in JavaScript, use the new keyword. For example:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

const personInstance = new Person('John');
```
In this example, personInstance will be a new instance of the Person class, and its name property will be set to 'John'.
