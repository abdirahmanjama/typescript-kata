
const alphanumeric = /[^0-9a-z]/gi;

export const isPalindrome = (word: string)  => {
    const term = word.toLowerCase().replace(alphanumeric, "");
    for(let i = 0, j = term.length - 1; i <= j; i++, j--){
        if(term[i] !== term[j]) return false
    }
    return true;
}