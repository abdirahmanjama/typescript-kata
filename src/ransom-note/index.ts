export const ransomNote = (ransomNote: string, magazine: string) => {
    let map: Record<string, number> = {}

    for (let i = 0; i < magazine.length; i++) {
        if (!map.hasOwnProperty(magazine.charAt(i))) {
            map[magazine.charAt(i)] = 1;
        }

        else {
            map[magazine.charAt(i)]++;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.hasOwnProperty(ransomNote.charAt(i))) {
            return false;
        }
        if (map[ransomNote[i]] > 0) {
            map[ransomNote.charAt(i)]--;
        }

        else { return false }
    }

    return true;

}

export const canConstruct = (ransomNote: string, magazine: string) => {
    let map: Record<string, number> = {}

    for (let char of magazine) {
        if (!map.hasOwnProperty(char)) {
            map[char] = 1;
        }
        else {
            map[char]++;
        }
    }

    for (let char of ransomNote) {
        if (!map.hasOwnProperty(char)) {
            return false
        }
        else {
            map[char]--;
        }
    }

    return true;
}



function noteRansom(ransom: string, magazine: string) {
    let frequencies: Record<string, number> = {};

    for (const char of magazine) {
        if (frequencies[char]) {
            frequencies[char]++;
        }
        else {
            frequencies[char] = 1
        }
    }

    for (const char of ransom) {
        if (frequencies[char] && frequencies[char] > 1) {
            frequencies[char]--;
        }

        else {
            return false
        }
    }

    return true

}