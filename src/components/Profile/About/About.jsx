import React from "react";
import s from "./About.module.css";


const About = () => {
    return (
        <div className={s.container}>
            <div className={s.wallpaper}></div>
            <div className={s.info}>
                <div className={s.ava}>
                    <img src="http://pristor.ru/wp-content/uploads/2018/05/%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D1%8B-6.jpg" alt="ava"/>
                </div>
                <div className={s.name}>
                    <h1>Mukhin Vadim</h1>
                </div>
                <div className={s.about}>
                    <h2>Future React developer</h2>
                </div>
            </div>
        </div>
    );
}

export default About;