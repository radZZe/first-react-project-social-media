import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) =>{
    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name = {d.name} id = {d.id} pic={d.pic}/>)
    let messagesElements = props.state.messages.map((m) => <MessageItem message={m.message}/>)

    let newMessage = React.createRef();
    let sendNewMessage = () => {
        props.sendNewMessage()
    }
    let changeNewMessageText = () => {
        let text = newMessage.current.value;
        props.changeNewMessageText(text)
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
                        <textarea onChange={changeNewMessageText} ref={newMessage} value={props.state.newMessageText} />
                        <button onClick={sendNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;