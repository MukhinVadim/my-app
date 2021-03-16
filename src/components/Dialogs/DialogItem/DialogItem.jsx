import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.person}>
            <NavLink class={s.link} to={path}>
                <div className={s.button}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )

}

export default DialogItem;