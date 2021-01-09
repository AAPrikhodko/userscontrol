import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./homepage/home"
import "./App.css"


function App() {

    return (
        <div className="pageContainer">
            <BrowserRouter>
                <Header/>
                <div className="contentWrap"><Route path='/' render={() => <Home/>}/></div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
