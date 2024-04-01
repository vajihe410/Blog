import React from 'react'
import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
//queries
import { GET_BLOGES_INFO } from '../graphQL/queries'
//components
import PostCard from './PostCard'
import Loader from './Loader'

function Blogs() {
  const {loading, data, errors} = useQuery(GET_BLOGES_INFO)

  if(loading) return <Loader/>
  if(errors) return <h1>Erorrs</h1>
  return (
    <Grid container spacing={2}>
     {data.posts.map(post => <Grid item xs={12} sm={6} md={4} key={post.id} >
        <PostCard {...post}/>
     </Grid>)}
    </Grid >
  )
}

export default Blogs