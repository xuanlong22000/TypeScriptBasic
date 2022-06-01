let a: number = 1 + 2
let b: number = a + 3

let c: {
    apple: number
    banana: number
} = {
    apple: a,
    banana: b
}
let d = c.apple * 4

console.log(d)