import React from 'react'
import { useQuery } from '@apollo/client'
import { Avatar, Box, Grid, Typography } from '@mui/material'
//queries
import { GET_POST_COMMENTS } from '../graphQL/queries'
//components
import Loader from './Loader'

function Comments({slug}) {
    const {loading,data,errors} = useQuery(GET_POST_COMMENTS,{variables:{slug}})
    if (loading) return <Loader/>
   
  return (
    <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py:1, mt:8}}>
        <Grid item xs={12} m={2}>
            <Typography variant='h6' component='p' fontWeight={700} color='primary' >کامنت ها</Typography>
        </Grid>
        {data.comments.map(comment => <Grid item key={comment.id} xs={12} m={2} p={2} border="1px silver solid" borderRadius={1}>
                                        <Box component='div' display='flex' alignItems='center' mb={3}>
                                            <Avatar>{comment.name[0]}</Avatar>
                                            <Typography variant='p' component='span' fontWeight={700} mr={1}>{comment.name}</Typography>
                                        </Box>
                                        <Typography variant='p' component='p'>{comment.text}</Typography>
                                      </Grid>)}
    </Grid>
  )
}

export default Comments