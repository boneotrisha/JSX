import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import './css/s.css';
import './css/about.css';
import './css/icons.css';
import './css/menu.css';
import './css/contact.css';


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
