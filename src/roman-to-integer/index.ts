const romanToInteger : Record<string, number> = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

export const convertRomanToInteger = (romanNumeral : string) => {
    let total = 0;

    for(let i = 0; i < romanNumeral.length; i++){
        if(romanToInteger[romanNumeral[i]] < romanToInteger[romanNumeral[i+1]]){
            total-=  romanToInteger[romanNumeral[i]]
        }
        else total+=romanToInteger[romanNumeral[i]]
    }

    return total;
}