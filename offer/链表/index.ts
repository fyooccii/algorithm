export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function printNode(node: ListNode | null) {
    if (!node) return;
    let current = node;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

export const node = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(8, new ListNode(10, null))))
);
