import React, { useState, useEffect, ChangeEvent } from 'react';

import { Grid, Typography, Button, Box } from '@material-ui/core';
import { TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import User from '../../model/User';
import { cadastro } from "../../services/Service";

import './Cadastro.css';

function Cadastro() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',

        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',

        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastro(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }






    return (
        <Grid container className='container'>

            <Grid item xs={7} className='fundoCadastro'>

            </Grid>

            <Grid item xs={5} alignItems='center'>

                <Box padding={10}>

                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align='center' style={{ fontWeight: 'bold', color: '#c23616' }}>CADASTRO</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='email' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Link to='/home' className="text-decorator-none">
                                    <Button type="submit" variant="outlined" className='cancelar'>Cancelar</Button>
                                </Link>
                                <Button type="submit" variant="outlined" className='confirmar'>Confirmar</Button>
                            </Link>
                        </Box>

                    </form>

                </Box>



            </Grid>


        </Grid>
    )
}

export default Cadastro