import { maxProfit } from "./index";

describe("max profit", () => {
    it("returns correct max profit given a set of numbers", () => {
        const nums = [5,3,1,7,3,1];
        expect(maxProfit(nums)).toBe(6)
        })
})