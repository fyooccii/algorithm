export const numbers: number[] = [1, 6, 4, 3, 4, 5, 2, 0];

export function swap(arr: number[], a: number, b: number): void {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}