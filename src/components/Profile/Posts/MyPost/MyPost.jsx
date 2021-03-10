import React from "react";
import s from "./MyPost.module.css";


const MyPost = () => {
    return (
        <div className={s.content}>
            <div className={s.content_mypost}>
                <span>My post</span>
            </div>
            <div className={s.content_form}>
                <form name="post">
                    <textarea name="mypost"/>
                    <input type="submit" value="SEND"/>
                </form>
            </div>
        </div>
    );
}

export default MyPost;