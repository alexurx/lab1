## Описание индивидуальной работы

Создать консольное приложение для анализа транзакций. Индивидуальная работа предполагает использование классов, объектов и применение методов для работы со списками.

## Краткая документация по проекту

Класс `TransactionAnalyzer` - это инструмент для анализа списка транзакций. Он содержит методы для работы с транзакциями, такие как добавление новой транзакции, получение списка всех транзакций, вычисление итогов транзакций и другие.  
Основными методами являются:

## constructor(transactions)
Конструктор класса. Принимает список транзакций и инициализирует поле allTransactions.

## addTransaction(transaction)
Добавляет транзакцию в список всех транзакций.

## getAllTransaction()
Возвращает список всех транзакций.

## getUniqueTransactionType()
Возвращает массив уникальных типов транзакций.

## calculateTotalAmount()
Возвращает общую сумму всех транзакций.

## calculateTotalAmountByDate(year, month, day)
Возвращает общую сумму транзакций за указанные год, месяц и день.

## getTransactionByType(type)
Возвращает список транзакций по указанному типу.

## getTransactionsInDateRange(startDate, endDate)
Возвращает список транзакций в указанном диапазоне дат.

## getTransactionsByMerchant(merchantName)
Возвращает список транзакций для указанного продавца.

## calculateAverageTransactionAmount()
Возвращает среднюю сумму транзакции.

## getTransactionsByAmountRange(minAmount, maxAmount)
Возвращает список транзакций в указанном диапазоне сумм.

## calculateTotalDebitAmount()
Возвращает общую сумму дебетовых транзакций.

## findMostTransactionsMonth()
Возвращает номер месяца, в котором было совершено наибольшее количество транзакций.

## findMostDebitTransactionMonth()
Возвращает номер месяца, в котором было совершено наибольшее количество дебетовых транзакций.

## mostTransactionTypes()
Определяет, какой тип транзакций (кредитный или дебетовый) преобладает.

## getTransactionsBeforeDate(date)
Возвращает список транзакций, совершенных до указанной даты.

## findTransactionById(id)
Находит транзакцию по ее идентификатору.

## mapTransactionDescriptions()
Возвращает список описаний транзакций.

## В JavaScript существует несколько примитивных типов данных:

1. Неопределенный: Указывает на значение переменной, которая была объявлена, но не инициализирована.
2. Булево: Принимает только два значения: true и false.
3. Число (Number): Представляет числовое значение.
4. Строка (String): Последовательность символов.
5. BigInt: Используется для представления очень больших целых чисел.
6. Символ: Введен в ECMAScript 6, представляет уникальные и неизменяемые значения.
7. Null (тип Null): Специальный примитив, используемый не только для данных, но и как указатель на конечную точку в цепочке прототипов.
8. Объект (Object): Простая структура, используемая не только для хранения данных, но и для создания других структур, таких как массивы, карты, множества и даты.

## Что касается методов массивов, то следующие методы могут быть использованы в приложении для обработки и анализа данных:

1. map(): Создает новый массив путем применения функции к каждому элементу исходного массива.
2. filter(): Возвращает новый массив, содержащий только те элементы, которые удовлетворяют заданному условию.
3. reduce(): Применяет функцию к аккумулятору и каждому элементу массива, возвращая одно значение.
4. forEach(): Выполняет указанную функцию для каждого элемента массива.
5. sort(): Сортирует элементы массива.
6. find(): Возвращает первый элемент, удовлетворяющий заданному условию.
7. some() и every(): Проверяют, удовлетворяет ли заданному условию хотя бы один или все элементы массива.

## Роль конструктора класса
Роль конструктора класса заключается в создании и инициализации объектов, созданных с помощью класса. Конструктор позволяет выполнить начальную инициализацию, которая должна быть выполнена до вызова других методов. Класс может иметь только один метод с именем "конструктор". Если класс является производным, то конструктор по умолчанию вызывает конструктор родителя, передавая ему аргументы, которые были предоставлены.

## Чтобы создать новый экземпляр класса в JavaScript, используйте ключевое слово new. Например:

```js
class TransactionAnalyzer {
  constructor(transactions) {
    this.transactions = transactions;
  }
}

const transactionAnalyzer = new TransactionAnalyzer(transactions);
```