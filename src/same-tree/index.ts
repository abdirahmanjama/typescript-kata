export interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

export const isSameTree = (p: TreeNode | null, q: TreeNode | null) : Boolean => {
    if(!p && !q) return true
    if(!p || !q || p.value !== q.value) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, p.left);
}

export const sameTree = <K extends,T>(p: Record<K,T>, q: T) => {
    if(p === null && q===null) return true;
    if(p === null || q === null) return false;
    if(p.value !== q.value) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

