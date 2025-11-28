// import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Contact from './pages/Contact';
import './App.css';

export default () => {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/tour" element={<Tour/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}