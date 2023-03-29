import React from 'react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Navbar from'./Components/Navbar';
import AboutMe from './Pages/AboutMe'
import Qualifications from './Pages/Qualifications'
import Hobbies from './Pages/Hobbies'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path = "AboutMe" element= {<AboutMe/>}/>
        <Route path = "Hobbies" element= {<Hobbies/>}/>
        <Route path = "Qualifications" element= {<Qualifications/>}/>
        <Route path = "Skills" element= {<Skills/>}/>
        <Route path = "Projects" element= {<Projects/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
