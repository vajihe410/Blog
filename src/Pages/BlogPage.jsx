import React from 'react'
import  sanitizeHtml from 'sanitize-html';
import { useQuery } from '@apollo/client'
import {useNavigate, useParams } from 'react-router-dom'
import { Container, Typography, Grid, Avatar, Box } from '@mui/material'
//components
import Loader from '../components/Loader'
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';
//querise
import { GET_POST_INFO } from '../graphQL/queries'
//icons
import { ArrowBackIosRounded } from '@mui/icons-material'

function BlogPage() {
  const navigate = useNavigate()
  const {slug} = useParams()
  const {loading,data,errors} = useQuery(GET_POST_INFO,{
    variables:{slug}
  })

  if(loading) return <Loader/>
  if(errors) return <h1>Errors</h1>
  console.log(data)
  return (
    <Container maxWidth='lg'> 
      <Grid container >
        <Grid item xs={12} mt={9} display='flex' justifyContent='space-between'>
          <Typography component='h2' variant='h5' fontWeight={700} color='primary'>{data.post.title}</Typography>
          <ArrowBackIosRounded onClick = {() => navigate(-1)}/>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img src={data.post.coverPhoto.url} alt={data.post.slug} width='100%' style={{borderRadius:15}}/>
        </Grid>
        <Grid item xs={12} mt={7}>
          <Avatar src={data.post.author.avatar.url} sx={{width:80,height:80,marginLeft:2}}/>
          <Box component='div' display='flex' alignItems='center'>
            <Typography component='p' variant='h5'>{data.post.author.name}</Typography>
            <Typography component='p' variant='p' color='text.secondary'>{data.post.author.field}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>
        </Grid>
        <Grid item xs={12} mt={5}>
          <CommentForm slug={slug}/>
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage