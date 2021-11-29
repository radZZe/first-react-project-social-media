import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        ProfilePage :{
            posts : [
                {message:"Классная фотография!!!!", likesCount: 573 ,id: 1},
                {message:"Это ты где был а щас уже дома", likesCount: 632 , id: 2},
                {message:"Ого как круто!!!", likesCount: 322 , id: 3},
            ],
            newPostText: "Введите новое сообщение...",
        },
        DialogsPage : {
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
        },
        sidebar: {
            friends: [
                {name:"Tomas",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
                {name:"John",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
                {name:"Kizaru",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
            ]
        }
    },
    getState(){
        return this._state;
    },
    _renderEntireTree(state){
        console.log('State changed');
    },
    dispatch(action){
        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage,action)
        this._renderEntireTree(this._state)
    },
    subscribe(observer){
        this._renderEntireTree=observer;
    }
}


export default store;