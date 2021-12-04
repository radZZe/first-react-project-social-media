import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import ContextStore from "../../Context";

const DialogsContainer = () =>{
    return(
        <ContextStore.Consumer>
            {
                (store) => {
                    let state = store.getState().DialogsPage;
                    let onAddMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                
                    let onChangeNewMessageText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    };
                    return (<Dialogs state={state} sendNewMessage={onAddMessage} changeNewMessageText={onChangeNewMessageText}/>)
                }
            }
        </ContextStore.Consumer>
    );
}

export default DialogsContainer;