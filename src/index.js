import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './styles/index.css';
import App from './App';
import Main from './pages/Main';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav name="Cliff Duffey" />
      <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
