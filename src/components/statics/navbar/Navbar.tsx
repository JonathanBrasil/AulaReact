import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

import './Navbar.css'


function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Deslogado', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/login')
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent =
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

  }

  return (

    <>
      {navbarComponent}
    </>
  )
}

export default Navbar