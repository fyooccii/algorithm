class Tree {
    private _val: number;
    get val() {
        return this._val;
    }
    private _left: Tree;
    private _right: Tree;
    constructor(val: number, left?: Tree, right?: Tree) {
        this._val = val;
        this._left = !left ? null : left;
        this._right = !right ? null : right;
    }

    // 前序遍历
    static preOrder(t: Tree) {
        console.log(t._val);
        if (t._left) {
            Tree.preOrder(t._left);
        }
        if (t._right) {
            Tree.preOrder(t._right);
        }
    }
    // 中序遍历
    static inOrder(t: Tree) {
        if (t._left) {
            Tree.inOrder(t._left);
        }
        console.log(t._val);
        if (t._right) {
            Tree.inOrder(t._right);
        }
    }
    // 后序遍历
    static postOrder(t: Tree) {
        if (t._left) {
            Tree.inOrder(t._left);
        }
        if (t._right) {
            Tree.inOrder(t._right);
        }
        console.log(t._val);
    }
}

function generateTree() {
    /**
     *                      10
     *              5               1
     *         8       99
     */
    return new Tree(10, new Tree(5, new Tree(8), new Tree(99)), new Tree(1));
}

const tree = generateTree();
// console.log(tree['_val']);

Tree.preOrder(tree);
console.log('===');
Tree.inOrder(tree);
console.log('===');
Tree.postOrder(tree);
