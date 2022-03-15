var NodeC = /** @class */ (function () {
    function NodeC(name) {
        this.name = name;
        this.next = null;
    }
    return NodeC;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(node) {
        this.head = node;
    }
    LinkedList.prototype.insertNode = function (name, nodeName) {
        var currentNode = this.head;
        var newNode = new NodeC(nodeName);
        do {
            if (currentNode.name === name) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return true;
            }
            else {
                currentNode = currentNode.next;
            }
        } while (currentNode);
        return false;
    };
    LinkedList.prototype.removeNode = function (nodeName) {
        if (this.head.name === nodeName) {
            this.head = this.head.next;
            return true;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.name === nodeName) {
                currentNode.next = currentNode.next.next;
                return true;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return false;
    };
    LinkedList.prototype.reverseList = function () {
        var currentNode = this.head;
        var prevNode = null;
        while (currentNode) {
            var nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            !nextNode && (this.head = currentNode);
            currentNode = nextNode;
        }
        return true;
    };
    LinkedList.prototype.findNode = function (nodeName) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.name === nodeName)
                return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    };
    LinkedList.prototype.printList = function () {
        var toString = '';
        var currentNode = this.head;
        while (currentNode) {
            toString = toString
                ? "".concat(toString, " -> ").concat(currentNode.name)
                : currentNode.name;
            currentNode = currentNode.next;
        }
        console.log(toString);
    };
    return LinkedList;
}());
function generateList(List, length) {
    var start = 0;
    while (start <= length) {
        List.insertNode("n".concat(start), "n".concat(start + 1));
        start++;
    }
}
var list = new LinkedList(new NodeC('n0'));
// @ts-ignore
window.list = list;
generateList(list, 10000);
list.reverseList();
list.printList();
