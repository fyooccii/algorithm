import { numbers, swap } from './common';

function insertSort(numbers: number[]): void {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = i; j > 0 && numbers[j] < numbers[j - 1]; j--) {
      swap(numbers, j, j - 1);
    }
  }
}

insertSort(numbers);
console.log(numbers);
