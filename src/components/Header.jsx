import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book'
function Header() {
  return (
    <header>
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography variant='h5'component='h1' fontWeight='700' flex={1}>وبلاگ</Typography>
                    <BookIcon/>
                </Toolbar>
            </Container>
        </AppBar>
    </header>
  )
}

export default Header