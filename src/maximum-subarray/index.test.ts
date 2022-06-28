import { getMaximumSubarray } from "./index";

describe("maximum subarray", () => {
    it("returns maxiumum number", () => {
        const arr = [1,2,3]
        expect(getMaximumSubarray(arr)).toBe(6);
    });
    it("return value if array length is 1", () => {
        const arr = [0]
        expect(getMaximumSubarray(arr)).toBe(0);
    } )
})