import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.head}>
            <img className={s.logo}
                 src="https://img.icons8.com/ios/452/pear.png"
                 alt="logo"/>
        </header>
    );
}

export default Header;