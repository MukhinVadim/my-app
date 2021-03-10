import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.button}>
                <a className={s.link} href="#">Profile</a>
            </div>
            <div className={s.button}>
                <a className={s.link} href="#">Message</a>
            </div>
            <div className={s.button}>
                <a className={s.link} href="#">News</a>
            </div>
            <div className={s.button}>
                <a className={s.link} href="#">Music</a>
            </div>
            <br/>
            <div className={s.button}>
                <a className={s.link} href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;