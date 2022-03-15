import { ListNode, node } from './index';
// 倒序输出链表
function reversePrint(head: ListNode | null): number[] {
    if (!head) return [];
    const result = [];
    let current = head;
    do {
        result.unshift(current.val);
        current = current.next;
    } while (current);
    return result;
}

console.log(reversePrint(node));
