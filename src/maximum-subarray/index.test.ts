import { getMaximumSubarray } from "./index";

describe("maximum subarray", () => {
    it("returns maxiumum number", () => {
        const arr = [1,2,3]
        expect(getMaximumSubarray(arr)).toBe(6);
    });
    it("returns error if no values given", () => {
        const arr = [1,2,3, -5, -5,1,1,-4]
        expect(getMaximumSubarray(arr)).toBe(6);
    } )
})