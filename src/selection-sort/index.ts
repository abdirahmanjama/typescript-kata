const selectionSort = (array: number[]) => {
    for (let i = 0; i < array.length - 1; i++){
        let min = i;

        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
    }

    return array;
}

const sortNumbers = (array: number[]) => {
    return array.sort((a,b) => a-b);
}
