interface TreeNode {
    left: TreeNode | null
    right: TreeNode | null
    value: number | null
}

export const maxDepth = (root : TreeNode | null) : number=> {
    if(root === null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right));
}