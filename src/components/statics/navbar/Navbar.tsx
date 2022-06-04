import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css'

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    navigate('/login')
  }

  return (

    <>
      <div className='container-menu'>
        <div className="menu">
          <div className="label">Menu:</div>
          <div className="spacer"></div>


          <div className="item"><span>
            <Link to="/home" className="text-decorator-none">
              Home
            </Link>
          </span></div>


          <div className="item"><span>
            <Link to="/posts" className="text-decorator-none">
              Postagens
            </Link>
          </span></div>


          <div className="item"><span>
            <Link to="/temas" className="text-decorator-none">
              Temas
            </Link>
          </span></div>


          <div className="item"><span>
            <Link to="/formularioTema" className="text-decorator-none">
              Novo Tema
            </Link>
          </span></div>

          <div className="item" onClick={goLogout}><span>Logout</span></div>

        </div>
      </div>
    </>
  )
}

export default Navbar