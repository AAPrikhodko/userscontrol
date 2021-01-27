import firebase from 'firebase'

const SET_USERS = "SET_USERS"

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        default:
            return state
    }

}

// ActionCreators
export const setUsers = (users) => ({type: SET_USERS, users})

// ThunkCreators
export const getUsers = () => {
    return (dispatch) => {
        const usersRef = firebase.database().ref()
        usersRef.child("users").on('value', el => {
            let users = []
            let i = 0
            if (Object.keys(el.val()).length !== 0) {
                for (let key of Object.keys(el.val())) {
                    users.push(el.val()[key])
                    users[i].key = key
                    i++
                }
                dispatch(setUsers(users))
            }
        }, function (error) {
            console.log("Error: " + error.code)})
    }
}

export const addUser = (user) => {
    return () => {
        const db = firebase.database()
        db.ref('users').push(user)
        getUsers()
    }
}

export const deleteUser = (user) => {
    return () => {
        const db = firebase.database()
        let refPath = "users/" + user.key
        db.ref(refPath).set(null)
        getUsers()
    }
}
export const editUser = (user, key) => {
    return () => {
        const db = firebase.database()
        let refPath = "users/" + key
        db.ref(refPath).set(user)
        getUsers()
    }
}

export default usersReducer