import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
//components
import Authors from '../components/Authors'
import Blogs from '../components/Blogs'

function HomePage() {
  return (
    <div>
        <Container maxWidth='lg'>
            <Grid container spacing={2} padding={3}>
                <Grid item xs={12} md={3} mt={4}>
                    <Typography variant='h5' component='h3' mb={3} fontWeight={700}>نویسمده ها</Typography>
                    <Authors/>
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Typography variant='h5' component='h3' mb={3} fontWeight={700}>مقالات</Typography>
                    <Blogs/>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default HomePage