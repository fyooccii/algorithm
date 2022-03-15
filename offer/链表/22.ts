import { ListNode, printNode, node } from './index';
// 根据k截取链表后k位
// 自己写的rz方法
function getKthFromEnd2(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    let result: ListNode = null;
    const resultArr = [];
    let current = head;
    do {
        const val = current.val;
        resultArr.length === k && resultArr.shift();
        resultArr.push(val);
        current = current.next;
    } while (current);
    result = new ListNode(resultArr[0], null);
    let currentResult = result;
    resultArr.forEach((val, index) => {
        if (index !== 0) {
            currentResult.next = new ListNode(val, null);
            currentResult = currentResult.next;
        }
    });
    return result;
}

// 最简单的标准解法
function getKthFromEnd1(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    let length = 0; // 记录链表长度
    let current = head;
    while (current) {
        ++length;
        current = current.next;
    }
    let resultStart = length - k; // 计算出需要返回链表的开始节点
    let index = 0;
    let result: ListNode = null;
    current = head; // 重置current
    while (current) {
        if (index === resultStart) {
            result = current;
            return result;
        }
        ++index;
        current = current.next;
    }
    return result;
}

// 双指针
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    let later: ListNode | null = head,
        former: ListNode | null = head;
    while (k !== 0) {
        former = former.next;
        k--;
    }
    while (former) {
        former = former.next;
        later = later.next;
    }
    return later;
}

let result = getKthFromEnd(node, 2);
printNode(result);
