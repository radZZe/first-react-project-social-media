import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) =>{
    let dialogsElements = props.dialogsData.dialogs.map( (d) => <DialogItem name = {d.name} id = {d.id} pic={d.pic}/>)
    let messagesElements = props.dialogsData.messages.map((m) => <MessageItem message={m.message}/>)

    let newMessage = React.createRef();
    let sendNewMessage = () => {
        // let message = newMessage.current.value;
        // props.addMessage(message);
        props.dispatch(addMessageActionCreator())
    }

    let changeNewMessageText = () => {
        let text = newMessage.current.value;
        // props.updateNewMessageText(text);
        props.dispatch(updateNewMessageTextActionCreator(text))
    };
    return(
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs_item}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <div className={classes.new_message}>
                        <textarea onChange={changeNewMessageText} ref={newMessage} value={props.dialogsData.newMessageText} />
                        <button onClick={sendNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;