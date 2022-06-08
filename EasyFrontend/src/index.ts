function user(student: { id: number, name: string }) {
    const { id, name } = student
    console.log(id, name)
}

user({ id: 1, name: 'qq' })