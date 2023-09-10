import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import NavBar from './components/navbar/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import Summarization from './pages/Summarization';
import Result from './pages/Result';
import NotFound from './pages/NotFound';
import Example from './pages/Example';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout><Home/></Layout>} path="/" />
        <Route element={<Layout><About/></Layout>} path="/about" />
        <Route element={<Layout><Summarization/></Layout>} path="/summarization" />
        <Route element={<Layout><Result/></Layout>} path="/result" />
        <Route element={<Example/>} path="/tes" />
        <Route element={<Layout><NotFound/></Layout>} path="/*" />
      </Routes>
    </>
  );
}

export default App;
