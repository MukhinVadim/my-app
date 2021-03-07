import React from "react";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-btn-profile">
                <a href="#">Profile</a>
            </div>
            <div className="nav-btn-massages">
                <a href="#">Massages</a>
            </div>
            <div className="nav-btn-news">
                <a href="#">News</a>
            </div>
            <div className="nav-btn-music">
                <a href="#">Music</a>
            </div>
            <br/>
            <div className="nav-btn-settings">
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;