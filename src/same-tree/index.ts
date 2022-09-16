interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

export const isSameTree = (p: TreeNode | null, q: TreeNode | null) : Boolean => {
    if(!p && !q) return true
    if(!p || !q || p.value !== q.value) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, p.left);
}