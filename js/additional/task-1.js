// == task-1 == //
// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// 1. Метод що запитує в користувача 2 числа
// 2. Метод що додає ці числа
// 3. Метод що віднімає ці числа
// 4. Метод що перемножує ці числа
// 5. Метод що ділить ці числа
// 6. Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// 7. Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// 8. Передати в метод №7 колбек ф-ю що підносить числа в степінь
// 9. Написати всі методи і перевірити чи вони працюють

class Calculator {
  constructor(firstNumber, secondNumber, value) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.value = value;
  }
  setNumbers() {
    this.firstNumber = Number.parseFloat(prompt("Input the first number"));
    this.secondNumber = Number.parseFloat(prompt("Input the second number"));
  }
  sumNumbers() {
    this.value = this.firstNumber + this.secondNumber;
    this.showOperation();
  }
  minusNumbers() {
    this.value = this.firstNumber - this.secondNumber;
    this.showOperation();
  }
  multiplyNumbers() {
    this.value = this.firstNumber * this.secondNumber;
    this.showOperation();
  }
  divideNumbers() {
    this.value = this.firstNumber / this.secondNumber;
    this.showOperation();
  }
  showOperation() {
    console.log(`Результат операції: ${this.value}`);
  }
  addMethod(callback) {
    this.value = callback(this.firstNumber, this.secondNumber);
    this.showOperation();
  }
}

const operation = new Calculator();
operation.setNumbers();
operation.sumNumbers();
operation.minusNumbers();
operation.multiplyNumbers();
operation.divideNumbers();
operation.addMethod(pow);
operation.addMethod(log);

function pow(a, b) {
  return Math.pow(a, b);
}
function log(a, b) {
  return Math.log(b) / Math.log(a);
}
