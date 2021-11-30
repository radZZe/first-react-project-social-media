import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) =>{
    let state = props.store.getState().DialogsPage;
    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onChangeNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    };
    return(<Dialogs state={state} sendNewMessage={onAddMessage} changeNewMessageText={onChangeNewMessageText}/>);
}

export default DialogsContainer;