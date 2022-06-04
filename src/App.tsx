import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className={"wrapper"}>
            <Header/>
            <Nav/>
            <Section/>
            <Footer/>
        </div>
    );
}

export default App;
