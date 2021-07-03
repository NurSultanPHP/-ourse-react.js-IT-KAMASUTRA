
import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/Dimych" activeClassName={classes.active}>Dimych</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/Andrey" activeClassName={classes.active}>Andrey</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/Sveta" activeClassName={classes.active}>Sveta</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/Sasha" activeClassName={classes.active}>Sasha</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/Vicktor" activeClassName={classes.active}>Vicktor</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/Valera" activeClassName={classes.active}>Valera</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your it-kamasutra?</div>
                <div className={classes.message}>Yo</div>
            </div>

        </div>
    )
};

export default Dialogs;