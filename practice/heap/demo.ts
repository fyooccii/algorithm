import Heap from '.';
const initValue = [0, 1, 3, 2, 11, 6, 5];
// const h1 = new Heap(initValue);
// h1.printData();
// Heap.sort(initValue, initValue.length - 1, 'DOWN');
// console.log(initValue);

// Heap.generateHeap(initValue, initValue.length - 1);
// console.log(initValue);

const otherVal = [0, 1, 3, 2, 5, 6, 9];
Heap.generateHeap(otherVal, otherVal.length - 1);
console.log(otherVal);
