class Queue<T> {
    private _data: T[];
    get data() {
        return this._data.slice(this._head, this._tail + 1);
    }
    private _length: number;
    get length() {
        return this._length;
    }
    private _size: number;
    get size() {
        return this._size;
    }
    private _head: number;
    get head() {
        return this._data[this._head];
    }
    private _tail: number;
    get tail() {
        return this._data[this._tail];
    }
    constructor(size: number) {
        this._size = size;
        this._data = new Array<T>(size);
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    // 入队
    enqueue(val: T): boolean {
        // 队列满了
        if (this._length === this._size) return false;
        // 队列中无任何数据
        if (this._head === null || this._tail === null) {
            this._head = this._tail = 0;
            this._data[this._tail] = val;
            this._length++;
            return true;
        }
        // 队尾超出数组最大下标，需要将整个数组迁移
        if (this._tail + 1 === this._size) {
            // 迁移数组
            for (let i = this._head; i <= this._tail; i++) {
                this._data[i - this._head] = this._data[i];
            }
            // 重置head与tail指针
            this._tail -= this._head;
            this._head = 0;
        }
        this._length++;
        this._data[++this._tail] = val;
        return true;
    }

    // 出队
    dequeue(): T {
        // 队列为空时
        if (this._length === 0) return null;
        this._length--;
        // 出队组后一个元素
        if (this._length === 0) {
            const result = this._data[this._head];
            // 重置数组
            this._head = this._tail = null;
            this._data = new Array(this._size);
            return result;
        }
        return this._data[this._head++];
    }
}

const q = new Queue<string>(3);
q.enqueue('1');
q.enqueue('2');
console.log(q.dequeue());
q.enqueue('1');
console.log(q, q.data);
console.log(q.dequeue());
console.log(q, q.data);
q.enqueue('9');
console.log(q, q.data);
// console.log(q.head);
