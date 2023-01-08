export const containsDuplicateTwin = (nums: number[]): boolean => {
    let seen: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen.hasOwnProperty(nums[i])) {
            return true;
        }
        seen[nums[i]] = i;
    }
    return false;
}

export const containsDuplicate = (nums: number[]): boolean => {
    return new Set(nums).size !== nums.length;
}


/**
 * Contains duplicate explained (3 possible solutions):
 * 
 * In this exercise, we want to write a function that determines whether a list or collection has any duplicates. 
 * 
 * Solution 1: The brute force approach would be to compare each value with every other value in the list and check to see if 
 * the values are the same. (this is what geezy did)
 * 
 * 
 * 
 * Solution 2: Another approach would be to simply create a new Set and pass in the values from the array.  (we do this in second function)
 * If the size of the set doesn't equal the original, then it means we must've had duplicates 
 * This is because sets cant have duplicates
 * 
 * 
 * 
 * Solution 3: Another approach would be to create a hashmap that looks like (we do this in first function)
 * 
 *    {
 *      value: counter 
 *    }
 * 
 * We can iterate through the list and add each element to the map, 
 * if a key already exists then it means we've already seen that value so we can return true. 
 * Else return false if we've exhaused all the elemtns
 */