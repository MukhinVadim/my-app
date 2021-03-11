import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.button}>
                <NavLink className={s.link} activeClassName={s.active} to="/profile" >
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={s.button}>
                <NavLink className={s.link} activeClassName={s.active} to="/dialogs">
                    <span>Message</span>
                </NavLink>
            </div>
            <div className={s.button}>
                <NavLink className={s.link} activeClassName={s.active} to="/news">
                    <span>News</span>
                </NavLink>
            </div>
            <div className={s.button}>
                <NavLink className={s.link} activeClassName={s.active} to="/music">
                    <span>Music</span>
                </NavLink>
            </div>
            <br/>
            <div className={s.button}>
                <NavLink className={s.link} activeClassName={s.active} to="/settings">
                    <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;