import React from 'react';
import { Avatar,
    Box,
    Button,
    Stack,
    Typography } from '@mui/material'; 
import hero_image from '../../assets/images/alex2crop.jpg'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Hero = () => {
    return (
        <Stack direction='column' alignItems='center' justifyContent='center'>
            <Stack width='60%' height='700px' alignItems='center' justifyContent='space-between' direction = {{xs: 'column', sm: 'row'}}>
                <Avatar sx={{width: 350, height: 350, border: '5px solid #55D7BB'}}><img src={hero_image} style={{width: '100%', marginTop: '15px'}}/></Avatar>
                <Stack ml='50px' direction = 'column'>
                    <Typography fontSize="42px" color='white' sx={{fontWeight: 500}}>Alex Swiggum</Typography>
                    <Typography fontSize="20px" color='white'>Full-Stack Developer</Typography>
                    <Typography fontSize="16px" mt='20px' color='primary'>I'm a full-stack software developer who 
                        thrives on creating seamless user experiences by leveraging my expertise in both front-end and back-end technologies. 
                        From crafting responsive UI designs to building scalable server-side architectures, I am passionate about bringing 
                        innovative ideas to life through code.</Typography>
                    <Stack direction='row' mt='20px' width='250px' alignItems='space-between' justifyContent='space-between'>
                        <Button variant='outlined' color='secondary'sx={{color: 'secondary', borderRadius: '10px', fontSize: '12px', height: '50px'}}>Download Resume</Button>
                        <Button variant='outlined' color='secondary' sx={{color: 'secondary', borderRadius: '10px', fontSize: '12px', height: '50px'}}>Discover More</Button>
                    </Stack>
                </Stack>
            </Stack>
            <Button color='secondary'><KeyboardArrowDownIcon sx={{ fontSize: 60, mb:'10px'}}/></Button>
        </Stack>
    )
}