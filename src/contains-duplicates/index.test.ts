import { containsDuplicate } from "./index";


describe("contains duplicate", () => {
    it("should return false if array is empty", () =>{    
        const input : number[] = [];
        expect(containsDuplicate(input)).toBe(false);
    });

    it("should return true if array contains duplicate", () =>{    
        const input : number[] = [11,11,4,5,1,1];
        expect(containsDuplicate(input)).toBe(true);
    });

    it("should return false if array contains no duplicate", () =>{    
        const input : number[] = [11,9,4,5,1,0];
        expect(containsDuplicate(input)).toBe(false);
    });
})