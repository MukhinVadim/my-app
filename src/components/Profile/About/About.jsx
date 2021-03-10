import React from "react";
import s from "./About.module.css";

import Background from "./Background/Background";
import Info from "./Info/Info";

const About = () => {
    return (
        <div className={s.container}>
            <Background/>
            <Info/>
        </div>
    );
}

export default About;