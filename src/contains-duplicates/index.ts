export const containsDuplicateTwin = (nums: number[]) : boolean => {
    let seen: Record<number, number>  = {};
    for(let i = 0; i < nums.length; i++){
        if(seen.hasOwnProperty(nums[i])){
            return true;
        }
        seen[nums[i]] = i;
    }
    return false;
}

export const containsDuplicate = (nums: number[]) : boolean => {
    let collection = new Set(nums);
    return collection.size !== nums.length;
}