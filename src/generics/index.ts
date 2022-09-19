export const last = <T>(array: Array<T>) => {
    return array[array.length - 1];
}

const numbers = last([1,2,3,4,5])
const strings = last<string>(['a', 'bc', 'de', 'fg'])

const makeArray = <T, Y>(x : T, y: Y) => {
    return [x]
}

const x = makeArray(5,5);
const a = makeArray('a', 'm');
const xa = makeArray(1, 'a');
