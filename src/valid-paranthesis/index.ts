

//reminder: given string with '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
export const isValid = (parenthesis: string) => {
    const map: any = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    const stack: any = [];

    for (const bracket of parenthesis) {
        if (bracket in map) {
            stack.push(bracket)
        }
        else if (map[stack.pop()] !== bracket) {
            return false
        }
    }

    return stack.length === 0;
}

