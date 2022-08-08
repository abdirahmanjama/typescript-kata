export const mergeSortedArray = (nums1 : number[], nums2 : number[], m : number, n: number) => {
    nums1.splice(m, nums1.length, ...nums2);
    nums1.sort((a,b) => a-b);
}