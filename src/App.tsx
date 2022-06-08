import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Login from './paginas/login/Login';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from './components/postagens/listapostagens/ListaPostagem';
import CadastroPost from './components/postagens/cadastropost/CadastroPostagem';
import DeletarPostagem from './components/postagens/deletepost/DeletarPostagem';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarTema from './components/temas/deletetema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';





function App() {
  return (
    <Provider store={store}>

    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />   

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
    </Router>
    </Provider>

  );
}

export default App;
