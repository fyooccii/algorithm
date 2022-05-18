import { numbers, swap } from './common';

function selectSort(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j;
      }
    }
    swap(numbers, i, minIndex);
  }
}

selectSort(numbers)
console.log(numbers)
