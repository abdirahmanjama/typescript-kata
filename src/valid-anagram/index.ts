/**
 * 
 * @param erey - means word in Somali ;)
 * @param word - means erey in English
 */
export const isAnagram = (erey : string, word: string ) => {
    if(erey.length !== word.length) return false;
    let map : Record<string, number> = {}

    for(const char of erey){
        if(!map[char]){
            map[char] = 1;
        }
        else{
            map[char]++;
        }
    }

    for(const char of word){
        if(!map[char]){
            return false;
        }
        else{
            map[char]--;
        }
    }

    return true;
}

export const isAnagramPart2 = (erey: string, word: string) => {
    return erey.split("").sort().join() === word.split("").sort().join();
}