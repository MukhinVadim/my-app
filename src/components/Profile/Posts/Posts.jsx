import React from "react";
import s from "./Posts.module.css";
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";


const Posts = () => {
    return (
        <div className={s.container}>
            <MyPost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;