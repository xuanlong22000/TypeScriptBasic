//Cau 2
type ClassConstructor<T> = new (...args: any[]) => T

function Debug<C extends ClassConstructor<{ getDebugValue(): object }>>(Class: C) {
    return class extends Class {
        debug() {
            let Name = Class.constructor.name
            let value = this.getDebugValue()
            return Name + JSON.stringify(value)
        }
    }
}

class DebugUser {
    constructor(
        private id: number,
        private firsName: string,
        private lastName: string
    ) { }

    getDebugValue() {
        return {
            id: this.id,
            name: this.firsName + ' ' + this.lastName
        }

    }
}

let User = Debug(DebugUser)
let user = new User(1, 'Long', 'Bui')
console.log(user)

//Cau 3
type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat
            case 'boot':
                return new Boot
            case 'sneaker':
                return new Sneaker
        }
    }
}

console.log(Shoe.create('boot'))