import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.container}>
            <span className={s.dialogs}>Dialogs</span>
            <div className={s.directory}>
                <ul>
                    <li>
                        <NavLink to="/dialogs/1" activeClassName={s.active}>Sasha</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={s.active}>Petya</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={s.active}>Sveta</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={s.active}>Misha</NavLink>
                    </li>
                </ul>
            </div>
            <div className={s.chat}></div>
        </div>
    );
}

export default Dialogs;