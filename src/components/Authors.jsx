import React from 'react'
import { useQuery } from '@apollo/client'
//queries
import { GET_AUTHORS_INFO } from '../graphQL/queries'
import { Avatar, Divider, Grid, Typography } from '@mui/material'

function Authors() {
  const {loading,data,error} = useQuery(GET_AUTHORS_INFO)
  console.log(data)
  return (
   <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
      {data.authors.map((author,index) => {
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}> 
        {/*     <Link to={`authors/${slug}`} style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
              <Avatar src={author.avatar.url} sx={{marginLeft:2}} />
              <Typography component='p' variant='p' color='text.secondary'>
                {author.name}
              </Typography>
            </Link> */}
            {index != author.length - 1 &&   <Grid item xs={12}>
                                                <Divider variant='middle'/>
                                              </Grid>}
          </Grid>
        </React.Fragment>
      })}
   </Grid>
  )
}

export default Authors