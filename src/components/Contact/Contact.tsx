import React from 'react'; 
import {
    Button,
    Stack,
    Typography } from '@mui/material'; 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';




export const Contact = () => {
    return (
        <Stack direction = 'column' width='60%' padding='30px' alignItems='center' textAlign='center' mt='200px' mb='200px'>
            <IconButton sx={{position:'relative'}} onClick={()=>{ window.scrollBy({left:0, top:-5000, behavior:"smooth"}) }} color='secondary'><ExpandLessIcon sx={{ fontSize: 60, mb:'20px'}}/></IconButton>
            <Typography variant='h6' color='primary.light' width='500px'>
            I'm currently searching for my next big adventure as a Full-Stack Software Engineer. Feel free to reach out to 
            me to discuss any and all things tech or if you'd like to potentially work together. I'd love to connect!
            </Typography>
            <Button href='mailto:alexrswiggum@gmail.com' target='_blank' variant='outlined' color='secondary'sx={{mt:'30px', color: 'secondary', borderRadius: '10px', fontSize: '16px', height: '50px', width: '125px'}}>Let's Chat</Button>
        </Stack>
    )
}