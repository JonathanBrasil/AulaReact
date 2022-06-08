import React, { useEffect } from "react";
import { Button, Box, Typography, Grid } from "@material-ui/core";
import TabPostagem from "../../components/postagens/tabpostagens/TabPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

import './Home.css';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo-home" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" style={{ color: "#c23616", fontWeight: "bolder" }}>WELCOME</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#2f3640" }}>DRAW - POST - INSPIRE</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">
                            <Link to='/formularioPostagem' className="text-decorator-none">
                            Start
                            </Link>
                            </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} className='fundoHome'>
                </Grid>

                <Grid item xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>


            </Grid>
        </>


    );
}

export default Home;