import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css"
import Searcher from './components/Searcher';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);

