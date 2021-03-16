import React from "react";
import s from "./MassageItem.module.css";

const MassageItem = (props) => {

    return (
        <div className={s.message}>
            <span>{props.message}</span>
        </div>
    )

}

export default MassageItem;