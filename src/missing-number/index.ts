export const missingNumber = (numbers: number[]) => {
    //first approach: sort array, loop through, if i != num[i], return i. 

    //second approach use gauss elimination, calculate expected total, then calculate actual total, return expected - actual. 

    const expectedSum = (numbers.length) * (numbers.length + 1) / 2;
    const actualSum = numbers.reduce((prev, curr) => prev + curr, 0);
    return expectedSum - actualSum

}