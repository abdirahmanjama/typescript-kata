export const maxProfit = (nums : number []) : number => {
    let profit = Number.MIN_VALUE;
    let mininimumNumber = Number.MAX_VALUE;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < mininimumNumber){
            mininimumNumber = nums[i];
        }
        if(nums[i] - mininimumNumber > profit){
            profit = nums[i] - mininimumNumber;
        }
    }
    return profit;
}