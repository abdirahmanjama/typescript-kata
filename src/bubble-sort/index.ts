const bubbleSort = <T>(numbers:T[]) => {
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){
            if(numbers[j] > numbers[j + 1]){
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]]; 
            }
        }
    }
    return numbers
}








const sortBubble = (numbers: number []) => {
    for(let i = 0; i < numbers.length - 1; i++){

    }
}










const sort = (nums: number[]) => {
    let res = [];
    for(let i = 0; i < nums.length - 1; i++){
        let minimum = i;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[minimum]){
                minimum = j;
            }
        
        }

        res.push(minimum);

    }

    return res;
}