import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CV from './Pages/CV/CV';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Publications from './Pages/Publications/Publications';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
  <>
      <Navbar toggleTheme={toggleTheme} darkMode={theme}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cv' element = {<CV/>} />
          <Route path='/projects' element = {<Projects/>}/>
          <Route path='/publications' element = {<Publications/>}/>
      </Routes>
      <Footer darkMode={theme}/>
  </>
  );
}

export default App;
