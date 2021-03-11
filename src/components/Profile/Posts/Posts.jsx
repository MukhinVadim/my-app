import React from "react";
import s from "./Posts.module.css";
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";


const Posts = () => {
    return (
        <div className={s.container}>
            <MyPost/>
            <Post massage="Hi, how are u?"/>
            <Post massage="Let's go!!"/>
        </div>
    );
}

export default Posts;