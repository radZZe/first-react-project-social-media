import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";


const DialogItem = (props) =>{
    return(
    <div className={classes.dialog}>
        <img src={props.pic} alt="" />
        <NavLink activeClassName={classes.active} to={"/dialogs/"+ props.id}>{props.name}</NavLink>
    </div>
    )
}

export default DialogItem;