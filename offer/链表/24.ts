import { ListNode, node, printNode } from './index';

type doublePointerNode = ListNode & { prev?: ListNode | null };
// 反转链表
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let resultTail: doublePointerNode = head;
    let current = head;
    let currentResult: doublePointerNode = head;
    while (current) {
        current = current.next;
        currentResult.prev = current;
        currentResult = currentResult.prev;
    }
    while (resultTail.prev) {
        if (resultTail === head) resultTail.next = null;
        resultTail.prev.next = resultTail;
        resultTail = resultTail.prev;
    }
    return resultTail;
}

function reverseList1(head: ListNode | null): ListNode | null {
    if (!head) return null;
    // 初始化指针
    let cur = head;
    let pre = null;
    //
    while (cur) {
        // 将下一个要遍历的节点保存下来
        let temp = cur.next;
        // 将当前遍历的节点指向上一个节点
        cur.next = pre;

        // 移动前一个指针
        pre = cur;
        // 移动当前遍历指针
        cur = temp;
    }
    return pre;
}

const reverseNode = reverseList1(node);
printNode(reverseNode);
