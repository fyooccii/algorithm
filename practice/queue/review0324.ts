class MyQueue<T> {
    constructor(size: number) {
        this._data = new Array<T>(size);
        this._head = this._tail = -1;
        this._length = 0;
        this._size = size;
    }
    private _data: T[];
    private _head: number;
    private _tail: number;
    private _length: number;
    private _size: number;

    enqueue(val: T): boolean {
        // 队满
        if (this._length >= this._size) return false;
        // 第一次入队
        this._head === -1 && (this._head = 0);
        // 需要重新调整数组
        if (this._tail + 1 > this._size - 1) {
        }
        // 正常入队
        this._tail++;
        this._length++;
        this._data[this._tail] = val;
        return true;
    }

    dequeue(): T {
        return null;
    }
}
