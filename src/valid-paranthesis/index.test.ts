import { isValid } from ".";

describe("bracket matcher", () => {
    test("returns true when given valid pairing", () => {
        const brackets = "[[]]"
        expect(isValid(brackets)).toBe(true);
    })

    test("returns false when given invalid pairing", () => {
        const brackets = "[[]"
        expect(isValid(brackets)).toBe(false);
    })
})