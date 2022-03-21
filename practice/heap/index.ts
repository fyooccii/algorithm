type SortType = 'UP' | 'DOWN';

export default class Heap {
    // private _data: number[];
    // private _size: number;
    // private _length: number;
    // constructor(initValue: number | number[]) {
    //     if (typeof initValue === 'number') {
    //         this._size = initValue;
    //         this._data = new Array(initValue + 1);
    //         this._length = 0;
    //     } else {
    //         this._length = initValue.length;
    //         this._data = [0, ...initValue];
    //         this._size = 999; // 传入数组时暂不设上限
    //         Heap.generateHeap(this._data, this._length);
    //     }
    // }

    // insert(val: number): boolean {
    //     if (this._length >= this._size) return false;
    //     this._length++;
    //     this._data[this._length] = val;
    //     let i = this._length;
    //     while (
    //         Math.floor(i / 2) > 0 &&
    //         this._data[i] < this._data[Math.floor(i / 2)]
    //     ) {
    //         Heap.swap(this._data, i, Math.floor(i / 2));
    //         i = Math.floor(i / 2);
    //     }
    //     return true;
    // }

    /**
     * 生成堆
     * @param data 数组
     * @param length 长度
     * @param type 类型 'UP' -> 大顶堆 'DOWN' -> 小顶堆
     */
    static generateHeap(data: number[], length: number, type: SortType = 'UP') {
        for (let i = Math.floor(length / 2); i >= 1; i--) {
            Heap.heapify(data, length, i, type);
        }
    }

    static swap(data: number[], a: number, b: number) {
        const temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }

    /**
     * 堆化
     * @param data 数组
     * @param length 长度
     * @param i 开始堆化的下标
     * @param type 堆化类型
     */
    static heapify(
        data: number[],
        length: number,
        i: number,
        type: SortType = 'UP'
    ) {
        while (1) {
            let maxOrMinPos = i;
            if (i * 2 <= length) {
                if (
                    (type === 'UP' && data[i] < data[i * 2]) ||
                    (type === 'DOWN' && data[i] > data[i * 2])
                ) {
                    maxOrMinPos = i * 2;
                }
            }
            if (i * 2 + 1 <= length) {
                if (
                    (type === 'UP' && data[maxOrMinPos] < data[i * 2 + 1]) ||
                    (type === 'DOWN' && data[maxOrMinPos] > data[i * 2 + 1])
                ) {
                    maxOrMinPos = i * 2 + 1;
                }
            }
            if (maxOrMinPos === i) break;
            Heap.swap(data, i, maxOrMinPos);
            i = maxOrMinPos;
        }
    }

    /**
     * 堆排序
     * @param data 数组
     * @param length 长度
     * @param type 升序 or 降序
     */
    static sort(data: number[], length: number, type: SortType = 'UP'): void {
        // 建堆
        Heap.generateHeap(data, length, type);
        // 排序
        let k = length;
        while (k > 1) {
            // 交换堆顶元素和最后一个堆元素
            Heap.swap(data, 1, k);
            // 相当于取出最后一个元素
            k--;
            // 从堆顶重新开始堆化
            Heap.heapify(data, k, 1, type);
        }
    }

    // printData() {
    //     console.log(this._data);
    // }
}
