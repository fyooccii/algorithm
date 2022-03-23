class NodeC {
    constructor(name: string) {
        this.name = name;
        this.next = null;
    }
    name: string;
    next: NodeC;
}

class LinkedList {
    private head: NodeC;
    constructor(node: NodeC) {
        this.head = node;
    }

    insertNode(name: string, nodeName: string): boolean {
        let currentNode: NodeC = this.head;
        const newNode: NodeC = new NodeC(nodeName);
        do {
            if (currentNode.name === name) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return true;
            } else {
                currentNode = currentNode.next;
            }
        } while (currentNode);
        return false;
    }

    removeNode(nodeName: string): boolean {
        if (this.head.name === nodeName) {
            this.head = this.head.next;
            return true;
        }
        let currentNode: NodeC = this.head;
        while (currentNode.next) {
            if (currentNode.next.name === nodeName) {
                currentNode.next = currentNode.next.next;
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    reverseList(): boolean {
        let currentNode: NodeC = this.head;
        let prevNode: NodeC = null;
        while (currentNode) {
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            !nextNode && (this.head = currentNode);
            currentNode = nextNode;
        }
        return true;
    }

    findNode(nodeName: string): NodeC {
        let currentNode: NodeC = this.head;
        while (currentNode) {
            if (currentNode.name === nodeName) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    printList() {
        let toString: string = '';
        let currentNode: NodeC = this.head;
        while (currentNode) {
            toString = toString
                ? `${toString} -> ${currentNode.name}`
                : currentNode.name;
            currentNode = currentNode.next;
        }
        console.log(toString);
    }
}

function generateList(List: LinkedList, length: number) {
    let start: number = 0;
    while (start <= length) {
        List.insertNode(`n${start}`, `n${start + 1}`);
        start++;
    }
}

const list = new LinkedList(new NodeC('n0'));
generateList(list, 10000);
list.reverseList();
list.printList();
