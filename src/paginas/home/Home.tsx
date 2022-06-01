import React from "react";
import { Button, Box, Typography, Grid } from "@material-ui/core";
import './Home.css';
import TabPostagem from "../../components/postagens/tabpostagens/TabPostagem";


function Home() {


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" style={{ color: "#c23616", fontWeight: "bolder" }}>WELCOME</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#2f3640" }}>DRAW - POST - INSPIRE</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Start</Button>
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