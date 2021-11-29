const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    dialogs : [
        {id : 1 , name: "Andrew",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"},
        {id : 2 , name: "Valera",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"},
        {id : 3 , name: "Kizaru",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"},
        {id : 4 , name: "Bob",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"},
        {id : 5 , name: "Tom",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"},
        {id : 6 , name: "Jake",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"}
    ],
    messages : [
        {id : 1 , message: "Hi , Tom"},
        {id : 2 , message: "Hi, Bob"},
        {id : 3 , message: "Hi, Jake"}
    ],
    newMessageText : "Введите новое сообщение",
};

const dialogsReducer = (state=initialState,action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 4,
                message: state.newMessageText,
            }
            state.messages.push(message)
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};
export const addMessageActionCreator=()=>{
    return({
        type:ADD_MESSAGE
    })
};
export const updateNewMessageTextActionCreator = (text)=>{
    return({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText:text
    })
};

export default dialogsReducer;