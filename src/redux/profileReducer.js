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
    switch (action.type){
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likesCount: 0,
                id:4
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
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
