import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
    <HashRouter basename='/'>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/projects' element = {<Projects/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  </>
  );
}

export default App;
