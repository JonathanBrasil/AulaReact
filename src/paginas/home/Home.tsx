import React from "react";
import { Button, Box, Paper } from "@material-ui/core";
import './Home.css';
import { AddBox } from "@material-ui/icons";

function Home() {
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display='flex' justifyContent='center'>
                        <h1> Título</h1>
                        <img alt='rowlet' style={{ width: "100%", height: "100%" }} src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-legends/f/ff/Rowlet.png" />
                    </Box>
                    <Box display='flex' justifyContent='center' p={2}>
                        <Button>Texto 1</Button>
                        <Button>Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>


    );
}

export default Home;