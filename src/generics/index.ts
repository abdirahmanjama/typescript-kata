export const last = <T>(array: Array<T>) => {
    return array[array.length - 1];
}

const numbers = last([1,2,3,4,5])
const strings = last<string>(['a', 'bc', 'de', 'fg'])

const makeArray = <T>(x : T) => {
    return [x]
}

const x = makeArray<number>(5);
const a = makeArray<string>('a');
