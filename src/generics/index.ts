export const last = <T>(array: Array<T>) => {
    return array[array.length - 1];
}

const numbers = last([1,2,3,4,5])
const strings = last<string>(['a', 'bc', 'de', 'fg'])

const makeArray = <X, Y>(x : X, y: Y) : [X, Y]=> {
    return [x, y]
}

const x = makeArray(5,5);
const a = makeArray('a', 'm');
const xa = makeArray(1, 'a');

const generateFullName = <T extends {firstName: string, lastName:string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}