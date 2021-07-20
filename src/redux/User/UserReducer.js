let initialState = {
    users: [],
    error: "",
    loading: true
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case "error_users":
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        case "success_users":
            return {
                users: action.payload,
                error: "",
                loading: false
            }
        default:
            return state;
    }
}

export default UserReducer;