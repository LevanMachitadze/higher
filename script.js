let num1 = Number(prompt('enter first number'));
let num2 = Number(prompt('enter second number'));
let num3 = Number(prompt('enter third number'));
let array = [num1, num2, num3];
let highest = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > highest) {
    highest = array[i];
  }
}
alert(`highest number is ${highest}`);
