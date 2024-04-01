import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//mutations
import { SEND_COMMENT } from '../graphQL/mutations'

function CommentForm({slug}) {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [text,setText] = useState("")

    const [sendComment,{loading,data,errors} ] = useMutation(SEND_COMMENT,{variables:{name,email,text,slug}})
    const sendHandler = () => {
      if(name && email && text){
        sendComment()
      }
      else{
        toast.warn(' فیلدهارا پر کن', {
          position: "top-center",
          });
      }
    }
    if(data){
      toast.success(' کامنت شما با موفقیت ارسال شد', {
        position: "top-center",
        });
    }
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
                <TextField  label='متن کامنت' variant='outlined' value={text} multiline minRows={4} onChange={(e)=>setText(e.target.value)} sx={{width:'100%'}}/>
        </Grid>
        <Grid item xs={12} m={2}>
          {loading ? <Button variant='contained' disabled onClick={sendHandler}>در حال ارسال</Button> : <Button variant='contained' onClick={sendHandler}>ارسال</Button>}
            
            <ToastContainer />
        </Grid>
    </Grid>
  )
}

export default CommentForm