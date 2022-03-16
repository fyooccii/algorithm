class Stack<T> {
    constructor(data?: T[]) {
        this._data = data || [];
        this._size = data ? data.length : 0;
    }
    private _data: T[];
    private _size: number;
    get size() {
        return this._size;
    }

    push(val: T) {
        this._data.push(val);
        this._size++;
    }

    pop(): T {
        this._size--;
        return this._data.pop();
    }

    printStack() {
        console.log(this._data);
    }
}

const s = new Stack<string>(['1', '2']);
s.printStack();
console.log('===');
console.log('push');
s.push('3');
s.printStack();
console.log('===');
console.log('pop');
const result = s.pop();
console.log(result);
s.printStack();
console.log(s.size);
