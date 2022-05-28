import React from 'react';
import Home from './paginas/home/Home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';


import './App.css';

function App() {
  return (

    <>

      <Router>
        <Navbar />
        <div className='centro' style={{ minHeight: '100vh', backgroundColor: "#dcdde1 " }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>




    </>

  );
}

export default App;
