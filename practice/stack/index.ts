class Stack<T> {
    constructor(size: number) {
        this._data = new Array(size);
        this._size = size;
        this._length = 0;
        this._top = null;
    }
    private _data: T[];
    private _size: number;
    private _length: number;
    private _top: number;

    push(val: T): boolean {
        // stack满了
        if (this._length === this._size) return false;
        // 首次像stack中添加数据
        if (this._top === null) {
            this._data[0] = val;
            this._top = 0;
        } else {
            this._data[++this._top] = val;
        }
        this._length++;
        return true;
    }

    pop(): T {
        // 如果此次出栈后，栈中无数据
        if (this._top - 1 < 0) {
            this._top = null;
            this._length = 0;
            return this._data[0];
        }
        this._length--;
        return this._data[this._top--];
    }

    printStack() {
        if (this._top !== null) {
            console.log(this._data.slice(0, this._top + 1));
        } else {
            console.log('stack is empty');
        }
    }
}

const s = new Stack<string>(3);
s.push('1');
s.push('2');
console.log(s);
console.log('pop', s.pop());
console.log('pop', s.pop());
console.log(s);
s.push('1');
s.push('2');
s.push('1');
s.push('2');
console.log(s);
