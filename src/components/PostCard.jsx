import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'

function PostCard({title,slug,coverPhoto,author}) {
  return (
    <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
        <CardHeader avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}}/>}
                    title={<Typography component='p' variant='p' color='text.secondary'>{author.name}</Typography>}/>
        <CardMedia component='img' image={coverPhoto.url} alt={slug} height='194'/>
        <CardContent>
            <Typography component='h3' variant='h6' color='text.primary' fontWeight={600}>{title}</Typography>
        </CardContent>
        <Divider variant='middle' sx={{margin:"10px"}} />
        <CardActions>
           {/*  <Link to={`/blogs/${slug}`} style={{with:'100%', textDecoraton:'none'}}>
                <Button variant='outlined'size='small' sx={{width:'100%', borderRadius:3}}>مطالعه مقاله</Button>
            </Link> */}
        </CardActions>
    </Card>
  )
}

export default PostCard