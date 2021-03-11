import React from "react";
import s from "./Profile.module.css";

import About from "./About/About";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div>
            <About></About>
            <Posts></Posts>
        </div>
    );
}

export default Profile;