// function user(student: { id: number, name: string }) {
//     const { id, name } = student
//     console.log(id, name)
// }

// user({ id: 1, name: 'qq' })



// interface GenericIdentityFn<Type> {
//     (arg: Type): Type;
// }

// function identity<Type>(arg: Type): Type {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;

// console.log(myIdentity(123))



// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };


// console.log(getProperty(x, 'a'))

type Point = { x: number; y: number };
type P = keyof Point;

function type(obj: Point, key: P) {
    return obj[key]
}

console.log(type({ x: 1, y: 2 }, 'x'))