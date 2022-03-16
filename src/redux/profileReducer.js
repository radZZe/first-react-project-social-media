const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT"

let initialState = {
    posts : [
        {message:"Классная фотография!!!!", likesCount: 573 ,id: 1},
        {message:"Это ты где был а щас уже дома", likesCount: 632 , id: 2},
        {message:"Ого как круто!!!", likesCount: 322 , id: 3},
    ],
    newPostText: "Введите новое сообщение...",
};

const profileReducer = (state=initialState,action) =>{
    let stateCopy = {...state}
    stateCopy.posts= [...state.posts];
    switch (action.type){
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likesCount: 0,
                id:4
            };
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy
        default:
            return stateCopy
    }

};

export default profileReducer;

export const addPostActionCreator =()=>{
    return({
        type:ADD_POST
    })
};
export const updatePostTextActionCreator=(text)=>{
    return({
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    })
};
