interface UserID {
    logged: boolean,
    friends?: number,
    name: string
}

class API {
    getLoggedInUserID(): UserID {
        try {
            return {
                logged: true,
                name: 'long'
            }
        } catch (e) {
            throw new RangeError('Error')
        }

    }
    getFriendIDs(userID: UserID): UserID[] {
        try {
            return [userID]
        } catch (e) {
            throw new RangeError('Error FriendID')
        }

    }
    getUserName(userID: UserID): string {
        try {
            return userID.name
        } catch (e) {
            throw new RangeError('Error UserID')
        }

    }
}

let api = new API()
console.log(api.getLoggedInUserID())
console.log(api.getFriendIDs({ logged: true, friends: 111, name: 'duke' }))
console.log(api.getUserName({ logged: false, friends: 111, name: 'wibu' }))