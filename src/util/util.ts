export const capFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const sum = (numArray: number[]) => {
    return numArray.reduce((acc, cur) => acc + cur, 0)
}
