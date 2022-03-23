class Node_1<T> {
    constructor(val: T) {
        this._value = val;
        this._next = null;
    }
    private _value: T;
    get value() {
        return this._value;
    }
    set value(val: T) {
        this._value = val;
    }
    private _next: Node_1<T>;
    get next() {
        return this._next;
    }
    set next(node: Node_1<T>) {
        this._next = node;
    }
}

class LinkedList_1<T> {
    constructor(head: Node_1<T>) {
        this._head = head;
    }
    private _head: Node_1<T>;

    insertList(pos: number | Node_1<T>, node: Node_1<T>): boolean {
        const type = typeof pos;
        let currentNode = this._head;
        if (type === 'number') {
            let p = 2;
            while (p <= pos) {
                currentNode = currentNode.next;
                if (!currentNode) return false;
                p++;
            }
        } else {
            while (currentNode !== pos) {
                currentNode = currentNode.next;
                if (!currentNode) return false;
            }
        }
        currentNode;
        node.next = currentNode.next;
        currentNode.next = node;
        return true;
    }

    removeNode(pos: number | Node_1<T>) {
        const type = typeof pos;
        let currentNode = this._head;
        let deleteNode: Node_1<T> = null;
        if (type === 'number') {
            if (pos === 1) {
                deleteNode = currentNode;
                this._head = currentNode.next;
                return deleteNode;
            } else {
                for (let p = 1; p + 1 < pos; p++) {
                    currentNode = currentNode.next;
                    if (!currentNode) return null;
                }
                deleteNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                return deleteNode;
            }
        } else {
            if (pos === this._head) {
                deleteNode = this._head;
                this._head = this._head.next;
                return deleteNode;
            } else {
                while (currentNode.next !== pos) {
                    currentNode = currentNode.next;
                    if (!currentNode) return null;
                }
                deleteNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                return deleteNode;
            }
        }
    }

    findNode(val: T): Node_1<T> {
        let currentNode = this._head;
        while (currentNode.value !== val) {
            currentNode = currentNode.next;
            if (!currentNode) return null;
        }
        return currentNode;
    }

    // offer
    reverseList() {
        let pre: Node_1<T> = null;
        let cur: Node_1<T> = this._head;
        while (cur) {
            let temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
            // 每次循环完需要更新头指针
            if (cur) this._head = cur;
        }
    }

    printList() {
        let i = this._head;
        let result = '';
        while (i) {
            result += `${i.value} -> `;
            i = i.next;
        }
        result += 'null';
        console.log(result);
    }
}

const node1 = new Node_1(1);
const node2 = new Node_1(2);
const node3 = new Node_1(3);
node1.next = node2;
node2.next = node3;
const lindeList = new LinkedList_1(node1);
lindeList.printList();
lindeList.insertList(2, new Node_1(100));
lindeList.printList();
lindeList.reverseList();
lindeList.printList();
