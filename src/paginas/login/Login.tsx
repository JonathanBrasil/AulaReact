import React, { ChangeEvent, useState, useEffect } from "react";

import { Grid, Box, Typography, Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import UserLogin from "../../model/UserLogin";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";

import './Login.css';

function Login() {

    let navigate = useNavigate();

    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserlogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''

        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserlogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')    
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login (`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!')
            
        } catch (error) {
            alert('Erro ao logar')


        };

    }

    return (
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align='center' style={{ fontWeight: 'bold', color: '#c23616' }}>ENTRAR</Typography>
                        <TextField 
                            value={userLogin.usuario} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' 
                            fullWidth />
                        <TextField
                            value={userLogin.senha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' 
                            fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button type="submit" variant="outlined" style={{ borderColor: "#c23616", backgroundColor: "#dcdde1 ", color: "black" }}>LOGIN</Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
                        </Box>
                        <Link to='cadastro'>
                            <Typography variant="subtitle1" gutterBottom align="center" style={{ fontWeight: "bold" }} >Cadastre-se</Typography>
                        </Link>
                    </Box>

                </Box>

            </Grid>
            <Grid xs={6} className='fundo'>

            </Grid>

        </Grid>


    );

}


export default Login;