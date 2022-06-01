import React from 'react';
import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';


import './App.css';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from './components/postagens/listapostagens/ListaPostagem';

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
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
          </Routes>
        </div>
        <Footer />
      </Router>




    </>

  );
}

export default App;
