import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./homepage/home"
import "./App.css"


function App() {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="header"><Header/></div>
                <div className="content"><Route path='/' render={() => <Home/>}/></div>

                <div className="footer"><Footer/></div>
            </BrowserRouter>
        </div>
    );
}

export default App;
