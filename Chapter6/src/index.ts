type User = {
    id: number
    name: string
}

function deleteUser(user: { id?: number, name: string }) {
    delete user.id
}

let user: User = {
    id: 1234,
    name: 'long'
}
console.log(user)
console.log(deleteUser(user))



type Unit = 'cm' | 'px' | '%'

let units: Unit[] = ['cm', 'px', '%']

function parseUnit(value: string): Unit | null {
    for (let i = 0; i < units.length; i++) {
        if (value.endsWith(units[i])) {
            return units[i]
        }
    }
    return null
}

type Width = {
    unit: Unit,
    value: number
}

function parseWidth(width: number | string | null | undefined): Width | null | undefined {
    if (width == null) {
        return null
    }

    if (typeof width === 'number') {
        return { unit: 'px', value: width }
    }
    let unit = parseUnit(width)
    if (unit) {
        return { unit, value: parseFloat(width) }
    }
    return null
}
console.log(parseWidth(1234))

console.log(parseFloat('1234') + 1234)



type UserTextEvent = { value: string }
type UserMouseEvent = { value: [number, number] }
type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
    if (typeof event.value === 'string') {
        return event.value
    }
    return event.value
}

console.log(handle({ value: [1234, 12345] }))

type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
}

type FriendList = APIResponse['user']['friendList']

function render(friends: FriendList) {
    return friends
}



type Exclusive<T, U> = T extends U ? T[] : T[]
type A = Exclusive<1 | 1, 2 | 4>

let a: A = []


