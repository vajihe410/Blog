import React from 'react'
import sanitizeHtml from 'sanitize-html';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
//queries
import { GET_AUTHOR_INFO } from '../graphQL/queries';
import { Avatar, Container, Grid, Typography } from '@mui/material';
//components
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';

function AuthorPage() {
    const {slug} = useParams();
    const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
        variables: { slug },
      });

    if(loading) return <Loader/>
    if(errors) return <h1>Erorrs...</h1>
      
    console.log(data)
  return (
    <Container maxWidth='lg'>
        <Grid container mt={10}>
            <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
                <Avatar src={data.author.avatar.url} sx={{width:250 , height:250}}/>
                <Typography component='h5' variant='h5' fontWeight={700} mt={4}>
                    {data.author.name}
                </Typography>
                <Typography component='p' variant='h5' color='text.secondary' mt={2}>
                    {data.author.field}
                </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
                <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.author.description.html)}}>

                </div>
            </Grid>
            <Grid item xs={12} mt={5}>
                <Typography component='h3' variant='h5' fontWeight={700}>مقالات {data.author.name}</Typography>
            </Grid>
             <Grid container spacing={2} mt={2}>
            {data.author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostCard
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
    </Container>
  )
}
export default AuthorPage 
