import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './styles/index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav name="Cliff Duffey" motto="Building [Security-In] Software" />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
