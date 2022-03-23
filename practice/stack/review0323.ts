class MyStack<T> {
    // 可以直接使用数组的pop、shift方法和length属性来做为栈顶指针，这样做最简单
    // 但这里是用最原始的方式来实现了一个栈
    constructor() {
        this._data = [];
        this._top = -1;
    }

    private _data: T[];
    get data() {
        return this._data;
    }
    private _top: number;

    in(value: T) {
        if (this._top === -1) {
            this._data[0] = value;
            this._top = 0;
        } else {
            this._data[++this._top] = value;
        }
    }
    out() {
        let result = null;
        if (this._top !== -1) {
            result = this._data[this._top];
            this._top--;
        }
        return result;
    }
    top() {
        return this._data[this._top];
    }
    size() {
        // top指向栈顶元素下标，因总长度需要加1
        return this._top + 1;
    }
    // 可以用来定时清理一下栈数组中多余的元素
    clean() {
        this._data = this._data.splice(0, this._top + 1);
    }
}

const stack = new MyStack<string>();
stack.in('x');
stack.in('y');
stack.in('z');

console.log(stack.top()); // 输出 'z'
console.log(stack.size()); // 输出 3

console.log(stack.out()); // 输出 'z'
console.log(stack.top()); // 输出 'y'
console.log(stack.size()); // 输出 '2'
