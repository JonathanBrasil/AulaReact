import React from "react";
import { Button, Box, Typography, Grid } from "@material-ui/core";
import './Home.css';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#dcdde1 " }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" style={{ color: "#c23616", fontWeight: "bolder" }}>WELCOME</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#2f3640" }}>DRAW - POST - INSPIRE</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#c23616", backgroundColor: "#dcdde1 ", color: "black" }}>Start</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://clipart.info/images/ccovers/1559831095red-smoke-png-6.png" alt="" width='600px'/>
                </Grid>
               
                
            </Grid>
        </>


    );
}

export default Home;