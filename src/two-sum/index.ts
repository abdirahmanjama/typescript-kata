export const twoSum = (nums : number [], target : number) : number [] => {
    let complement : Record<number, number> = {};

    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i];
        if(complement.hasOwnProperty(difference)){
            return [complement[difference], i];
        }
        complement[nums[i]] = i;
    }
    
    return [];
}