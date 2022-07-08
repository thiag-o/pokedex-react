import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from './pages/Pokemon/Pokemon';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import User from './pages/User/User';
import { UserStorage } from './useContext';
import ProtectedRouter from './components/Helper/ProtectedRouter/ProtectedRouter';

const App = () => {
  return (
    <div className="container-all ">
      <BrowserRouter>
        <UserStorage>
          <div>
            <Header />
            <main className="size-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:num" element={<Pokemon />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<Register />} />
                <Route
                  path="/conta/*"
                  element={
                    <ProtectedRouter>
                      <User />
                    </ProtectedRouter>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
