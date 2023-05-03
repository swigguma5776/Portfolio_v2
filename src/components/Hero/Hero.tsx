import React from 'react';
import { Avatar,
    Box,
    Button,
    Stack,
    Typography } from '@mui/material'; 
import hero_image from '../../assets/images/alex2crop.jpg'; 
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Hero = () => {
    return (
        <Stack direction='column' alignItems='center' justifyContent='center' mt={{xs: '100px', md: '0px'}}>
            <Stack width='60%' height='700px' alignItems={{md:'center', xs: 'end'}} justifyContent='space-between' direction = {{xs: 'column', sm: 'row'}}>
                <Avatar sx={{width: {xs: '250px', md: '350px'}, height: { xs: '250px', md:'350px'}, ml: 'auto', mr: 'auto', border: '5px solid #55D7BB'}}><img src={hero_image} style={{width: '100%', marginTop: '15px'}}/></Avatar>
                <Stack ml={{md:'50px', xs:'0px'}} direction = 'column'>
                    <Typography variant='h1' color='white' sx={{fontWeight: 500}}>Alex Swiggum</Typography>
                    <Typography variant='h4' color='primary.light'>Full-Stack Developer</Typography>
                    <Typography variant='body1' mt='20px' color='primary'>I'm a full-stack software developer who 
                        thrives on creating seamless user experiences by leveraging my expertise in both front-end and back-end technologies. 
                        From crafting responsive UI designs to building scalable server-side architectures, I am passionate about bringing 
                        innovative ideas to life through code.</Typography>
                    <Stack direction='row' mt='20px' width='250px' alignItems='space-between' justifyContent='space-between'>
                        <Button variant='outlined' color='secondary'sx={{color: 'secondary', borderRadius: '10px', fontSize: '12px', height: '50px'}}>Download Resume</Button>
                        <IconButton href="https://www.linkedin.com/in/alex-swiggum-profile/" target='_blank' color='primary'><LinkedInIcon sx={{fontSize:25}} /></IconButton>
                        <IconButton href='https://github.com/swigguma5776' target='_blank' color='primary'><GitHubIcon sx={{fontSize:25}} /></IconButton>
                    </Stack>
                </Stack>
            </Stack>
            <IconButton sx={{position:'relative', mt:{xs: '50px', md: '0px'}}} onClick={()=>{ window.scrollBy({left:0, top:600, behavior:"smooth"}) }} color='secondary'><KeyboardArrowDownIcon sx={{ fontSize: 60, mb:'20px'}}/></IconButton>
        </Stack>
    )
}