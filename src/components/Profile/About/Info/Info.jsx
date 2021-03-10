import React from "react";
import s from './Info.module.css';

import Ava from "./Ava/Ava";

const Info = () => {
    return (
        <div className={s.container}>
            <Ava></Ava>
            <div className={s.container_name}>
                <h1>Mukhin Vadim</h1>
            </div>
            <div className={s.container_about}>
                <h2>Future React developer</h2>
            </div>
        </div>
    );
}

export default Info;