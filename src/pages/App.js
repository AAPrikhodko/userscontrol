import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./homepage/home"
import Faq from "./Faq/faq";
import Contacts from "./Contacts/Contacts";


function App() {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="header"><Header/></div>
                <div className="content"><Route exact path='/' render={() => <Home/>}/></div>
                <div className="content"><Route exact path='/faq' render={() => <Faq/>}/></div>
                <div className="content"><Route exact path='/contacts' render={() => <Contacts/>}/></div>
                <div className="footer"><Footer/></div>
            </BrowserRouter>
        </div>
    );
}

export default App;
