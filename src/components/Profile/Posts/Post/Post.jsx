import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.container}>
            <img className={s.ava} src='http://pristor.ru/wp-content/uploads/2018/05/%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D1%8B-6.jpg' />
            <div className={s.text}>{props.massage}</div>
            <button className={s.like}>
                <span>
                    Like
                </span>
            </button>
        </div>
    );
}

export default Post;