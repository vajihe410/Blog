import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'

function CommentForm({slug}) {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [comment,setComment] = useState("")

  return (
    <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4 , py:1 ,mt:5}}>
        <Grid item xs={12} m={2}>
            <Typography component='p' variant='h6' fontWeight={700} color='primary'>ارسال کامنت</Typography>
        </Grid>
        <Grid item xs={12} m={2}> 
                <TextField  label='نام کاربری' variant='outlined' value={name} onChange={(e)=>setName(e.target.value)} sx={{width:'100%'}}/>
        </Grid>
        <Grid item xs={12} m={2}> 
                <TextField  label='ایمیل' variant='outlined' value={email} onChange={(e)=>setEmail(e.target.value)} sx={{width:'100%'}}/>
        </Grid>
        <Grid item xs={12} m={2}> 
                <TextField  label='متن کامنت' variant='outlined' value={comment} multiline minRows={4} onChange={(e)=>setComment(e.target.value)} sx={{width:'100%'}}/>
        </Grid>
        <Grid item xs={12} m={2}>
            <Button variant='contained'>ارسال</Button>
        </Grid>
    </Grid>
  )
}

export default CommentForm