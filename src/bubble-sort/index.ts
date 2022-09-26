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