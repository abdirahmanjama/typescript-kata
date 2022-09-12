export const ransomNote = (ransomNote: string, magazine: string) => {
    let map: Record<string, number> = {}

    for(let i = 0; i < magazine.length; i++){
        if(map.hasOwnProperty(magazine.charAt(i))){
            map[magazine[i]]--;
        }
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        if(!map.hasOwnProperty(ransomNote.charAt(i))){
            map[ransomNote[i]] = 1;
        }
        else {
            map[ransomNote[i]]++;
        }
    }

   

    return Object.values(map).reduce((prev, curr) => prev + curr, 0) === 0;
    
}