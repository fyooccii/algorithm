class MyQueue<T> {
    constructor(size: number) {
        this._data = new Array<T>(size);
        this._head = this._tail = 0;
        this._size = size;
    }
    private _data: T[];
    private _head: number;
    private _tail: number;
    private _size: number;

    enqueue(val: T): boolean {
        // 处理两种特殊情况
        if (this._tail === this._size) {
            // 队满
            if (this._head === 0) {
                return false;
            } else {
                // 数据迁移
                const headIndex = this._head;
                for (let i = headIndex; i < this._tail; i++) {
                    this._data[i - headIndex] = this._data[i];
                }
                // 迁移完成后需要重置head与tail指针
                this._tail = this._tail - this._head;
                this._head = 0;
            }
        }
        // 正常入队操作
        this._data[this._tail] = val;
        this._tail++;
        return true;
    }

    dequeue(): T {
        // 队空
        if (this._tail === this._head) return null;
        return this._data[this._head++];
    }

    length(): number {
        return this._tail - this._head;
    }
}

const myQ = new MyQueue<number>(5);
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
console.log(myQ);
myQ.dequeue();
console.log(myQ);
myQ.enqueue(2);
myQ.enqueue(3);
console.log(myQ, myQ.length());
myQ.enqueue(100);
console.log(myQ);
