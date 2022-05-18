import { numbers, swap } from './common';

function bubbleSort(numbers: number[]): void {
  for (let i = numbers.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swap(numbers, j, j + 1);
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
