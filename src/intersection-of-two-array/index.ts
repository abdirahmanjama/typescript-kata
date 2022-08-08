export const instersectionTwoArrays = (nums1: number[], nums2: number[]) : number[] => {
    const result : number [] = [];
    const map : Record<number, number> = {};

    for(const num of nums1){
        if(map.hasOwnProperty(num)){
            map[num]++;
        }
        else{
            map[num] = 1;
        }
    }
    for(const num of nums2){
        if(map.hasOwnProperty(num) && map[num] > 0){
            result.push(num);
            map[num]--;
        }
    }
    return result;
}