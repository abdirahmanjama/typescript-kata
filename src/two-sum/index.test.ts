import { twoSum } from "./index";

describe("two sum", () => {
    it("should find two indices that give target", () => {
        const target = 5;
        const nums = [1,3,2,6,1,3];
        expect(twoSum(nums, target)).toBe([1,2]);
    })
})