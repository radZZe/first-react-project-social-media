
let initialState = {
    friends: [
        {name:"Tomas",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
        {name:"John",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
        {name:"Kizaru",pic:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" },
    ]
}
const sidebarReducer = (state=initialState,action) =>{
    switch(action.type){
        default:
            return state
    }
};
export default sidebarReducer