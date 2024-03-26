import React from 'react'
import { Typography } from '@mui/material'
//icons
import FavoritrIcon from '@mui/icons-material/Favorite'

function Footer() {
  return (
    <footer>
        <Typography variant='p' component='p' bgcolor='#f7f7f7' color='primary' padding='10px' textAlign='center' mt={10}>
        <FavoritrIcon textAlign='center'/> Made with 
        </Typography>
    </footer>
  )
}

export default Footer