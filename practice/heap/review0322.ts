function sort(data: number[], length: number, type: 'UP' | 'DOWN' = 'UP') {
    generateHeap(data, length, type);
    debugger;
    let l = length;
    while (l > 1) {
        swap(data, 1, l);
        l--;
        heapify(data, l, 1, type);
    }
}
function generateHeap(data: number[], length: number, type: 'UP' | 'DOWN') {
    for (let i = Math.floor(length / 2); i >= 1; i--) {
        heapify(data, length, i, type);
    }
}
function heapify(
    data: number[],
    length: number,
    i: number,
    type: 'UP' | 'DOWN'
) {
    while (1) {
        let maxOrMinPos = i;
        if (i * 2 <= length) {
            if (
                (data[i] < data[i * 2] && type === 'UP') ||
                (data[i] > data[i * 2] && type === 'DOWN')
            ) {
                maxOrMinPos = i * 2;
            }
        }
        if (i * 2 + 1 <= length) {
            if (
                (data[maxOrMinPos] < data[i * 2 + 1] && type === 'UP') ||
                (data[maxOrMinPos] > data[i * 2 + 1] && type === 'DOWN')
            ) {
                maxOrMinPos = i * 2 + 1;
            }
        }
        if (i === maxOrMinPos) break;
        swap(data, i, maxOrMinPos);
        i = maxOrMinPos;
    }
}
function swap(data: number[], a: number, b: number) {
    let temp = data[a];
    data[a] = data[b];
    data[b] = temp;
}

const demoArr1 = [0, 3, 2, 1, 5, 6, 10];
sort(demoArr1, demoArr1.length - 1, 'DOWN');
console.log(demoArr1);
