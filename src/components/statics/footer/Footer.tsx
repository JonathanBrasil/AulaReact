import React from 'react'
import "./Footer.css"
import { Box, Typography, Grid } from '@material-ui/core'

function Footer() {
  return (
    <>


      <Grid className='footer' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>

          {/* MENU MINHAS REDES */}
          <div className="menu">
            <div className="label">Minhas redes:</div>
            <div className="spacer"></div>
            <div className="item"><span>Twitter</span></div>
            <div className="item"><span>Instagram</span></div>
            <div className="item"><span>GitHub</span></div>
            <div className="item"><span>Linkedin</span></div>
            <div className="item"><span>Gmail</span></div>
          </div>

          {/* mensagem de copyright */}

          <Box style={{ backgroundColor: "#C9C8AE", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </>
  )
}

export default Footer