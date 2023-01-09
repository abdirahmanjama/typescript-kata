export const isValid = (brackets: string) => {

    const map: any = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    const stack: any = [];

    for (const element of brackets) {
        if (element in map) {
            stack.push(element)
        }
        else if (map[stack.pop()] !== element) {
            return false
        }
    }

    return stack.length === 0;

}