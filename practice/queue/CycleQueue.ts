class CycleQueue<T> {
    constructor(size: number) {
        this._date = new Array<T>(size);
        this._size = size;
        this._head = this._tail = 0;
    }
    private _date: T[];
    private _size: number;
    private _head: number;
    private _tail: number;

    enqueue(val: T): boolean {
        // 队满 循环队列规律 当(tail+1)%size === head时队满
        if ((this._tail + 1) % this._size === this._head) return false;
        this._date[this._tail] = val;
        // tail移到下一个位置
        this._tail = (this._tail + 1) % this._size;
        return true;
    }

    dequeue(): T {
        // 队空 head === tail
        if (this._head === this._tail) return null;
        const result = this._date[this._head];
        this._head = (this._head + 1) % this._size;
        return result;
    }

    length() {
        const head = this._head,
            tail = this._tail,
            size = this._size;
        if (tail >= head) return tail - head;
        return size - head + (tail - 0);
    }
}

const cycleQueue = new CycleQueue<number>(5);
cycleQueue.enqueue(10);
cycleQueue.enqueue(5);
cycleQueue.enqueue(3);
cycleQueue.enqueue(9);
console.log(cycleQueue, cycleQueue.length());
cycleQueue.dequeue();
console.log(cycleQueue, cycleQueue.length());
cycleQueue.enqueue(2);
console.log(cycleQueue, cycleQueue.length());
cycleQueue.dequeue();
console.log(cycleQueue, cycleQueue.length());
cycleQueue.enqueue(55);
console.log(cycleQueue, cycleQueue.length());
