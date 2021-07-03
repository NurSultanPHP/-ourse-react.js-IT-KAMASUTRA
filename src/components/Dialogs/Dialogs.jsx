
import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    
    let path = "/dialogs/"+props.slug;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.author}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>

                <DialogItem author="Dimych" slug="Dimych"/>
                
                <DialogItem author="Sveta" slug="Sveta"/>
                
                <DialogItem author="Sasha" slug="Sasha"/>
                
                <DialogItem author="Vicktor" slug="Vicktor"/>
                
                <DialogItem author="Valera" slug="Valera"/>
            </div>

            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="How are you?"/>
            </div>

        </div>
    )
};

export default Dialogs;