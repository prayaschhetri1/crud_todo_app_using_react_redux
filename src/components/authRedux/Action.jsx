
export const LOGGED_IN_CHECK = "LOGGED_IN_CHECK";


export const loggedInCheck = (payload) => {
    return {
        type : LOGGED_IN_CHECK,payload
    }
}