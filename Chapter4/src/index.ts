//Cau 3
let reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        console.log(from.getMonth(), toOrDestination, destination)
    } else if (typeof toOrDestination === 'string') {
        console.log(from.getFullYear(), toOrDestination)
    }
}
const date: Date = new Date()
reserve(date, 'Saigon')

//Cau 5

function is1(string1: string, string2: string) {
    return string1 === string2 ? true : false
}

console.log(is1('string', 'otherstring'))

function is2(boolean1: boolean, boolean2: boolean) {
    return boolean1 && boolean2 ? true : false
}

console.log(is2(true, true))

function is3(number1: number, number2: number) {
    return number1 === number2 ? true : false
}

console.log(is3(42, 42))

function is4(number1: number, string2: number) {
    return number1 === string2 ? true : false
}

// console.log(is4(10, 'foo'))

function is5(arr1: number[], arr2: number[], arr3: number[]) {
    return arr1.length === arr2.length && arr2.length === arr3.length && arr1.length === arr3.length ? true : false
}

console.log(is5([1], [1, 2], [1, 2, 3]))

