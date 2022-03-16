const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
            followed: true,
            fullName: "Dmitriy",
            status: "Im a boss",
            country: "Belarus",
            city: 'Minsk'
        },
        {
            id: 2,
            photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
            followed: false,
            fullName: "Sasha",
            status: "Im a boss",
            country: "Russia",
            city: 'Moscow'
        },
        {
            id: 3,
            photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
            followed: true,
            fullName: "Andrew",
            status: "Im a boss",
            country: "Ukraine",
            city: 'Kiev'
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return {...state, users: [...state.users]}
    }

};

export default usersReducer;

export const followAC = (userID) => {
    return ({type: FOLLOW, userID})
};
export const unfollowAC = (userID) => {
    return ({type: UNFOLLOW, userID})
};
export const setUsersAC = (users) => {
    return ({type: SET_USERS, users})
};
