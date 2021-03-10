import './App.css';
import React from "react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Navbar></Navbar>
            <Profile></Profile>
        </div>
    );
}

export default App;
