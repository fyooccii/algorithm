class Tree {
    private val: number;
    private left: Tree;
    private right: Tree;
    constructor(val: number, left?: Tree, right?: Tree) {
        this.val = val;
        this.left = !left ? null : left;
        this.right = !right ? null : right;
    }

    // 前序遍历
    public static preOrder(t: Tree) {
        console.log(t.val);
        if (t.left) {
            Tree.preOrder(t.left);
        }
        if (t.right) {
            Tree.preOrder(t.right);
        }
    }
    // 中序遍历
    public static inOrder(t: Tree) {
        if (t.left) {
            Tree.inOrder(t.left);
        }
        console.log(t.val);
        if (t.right) {
            Tree.inOrder(t.right);
        }
    }
    // 后序遍历
    public static postOrder(t: Tree) {
        if (t.left) {
            Tree.inOrder(t.left);
        }
        if (t.right) {
            Tree.inOrder(t.right);
        }
        console.log(t.val);
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

Tree.preOrder(tree);
console.log('===');
Tree.inOrder(tree);
console.log('===');
Tree.postOrder(tree);
