import React from 'react'
import "./Footer.css"
import { Box, Typography, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box className='rodape'>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography align="center" gutterBottom className='texto'>Siga-me nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                <FacebookIcon className='icone' />
              </a>
              <a href="https://www.instagram.com/_jonathanbrasil/" target="_blank">
                <InstagramIcon className='icone' />
              </a>
              <a href="https://www.linkedin.com/in/jonathanbrasil" target="_blank">
                <LinkedInIcon className='icone' />
              </a>
            </Box>
          </Box>


        </Grid>
      </Grid>
    </>
  )
}

export default Footer