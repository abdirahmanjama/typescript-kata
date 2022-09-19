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

export const last = <T>(array: Array<T>) => {
    return array[array.length - 1];
}

const numbers = last([1,2,3,4,5])
const strings = last(['a', 'bc', 'de', 'fg'])