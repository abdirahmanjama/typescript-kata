
export const splitStrings = (word : string): Array<string> => {
    const response = [];
    const temp = word.split("");

    for(let i = 0; i < temp.length; i+=2){
        if(temp[i+1]) response.push(temp[i] + temp[i+1])
        else {
            response.push(temp[i]+"_")
        }
    }
    
    return response
}