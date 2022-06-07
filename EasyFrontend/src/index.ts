interface User {
    id: number,
    Name: string,
    age: number
}

const user: User = {
    id: 1,
    Name: 'long',
    age: 22
}

// const Id=user.id
// const Name=user.name

const { id, Name } = user

console.log(user)