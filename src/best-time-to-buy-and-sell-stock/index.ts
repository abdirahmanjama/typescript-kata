export const maxProfit = (nums : number []) : number => {
    let profit = Number.MIN_VALUE;
    let minimumNumber = Number.MAX_VALUE;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < minimumNumber){
            minimumNumber = nums[i];
        }
        if(nums[i] - minimumNumber > profit){
            profit = nums[i] - minimumNumber;
        }
    }
    return profit;
}