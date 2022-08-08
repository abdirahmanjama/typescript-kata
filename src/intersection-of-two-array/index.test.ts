import { instersectionTwoArrays } from "./index";

describe("intersection of two arrays", () => {

    let nums1;
    let nums2;

    beforeEach(() => {
        nums1 = null;
        nums2 = null;
    })

    it("should return the common elements of both... ", () => {
        nums1 = [1,5,2,5,6,7]
        nums2 = [5,2,2,3,4]

        expect(instersectionTwoArrays(nums1, nums2)).toEqual([5,2])
    })
})