import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './routes/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from './routes/Pokemon/Pokemon';

const App = () => {
  return (
    <div className="container-all ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:num" element={<Pokemon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
