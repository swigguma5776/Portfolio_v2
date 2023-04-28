import React from 'react';
import { About } from '../About'; 
import { Contact } from '../Contact';
import { Hero } from '../Hero'; 
import { Projects } from '../Projects';
import { styled } from '@mui/system'
import {  
    Stack,
    Link,
    Typography, 
    makeStyles} from '@mui/material'; 
import Divider from '@mui/material/Divider';

const Main = styled('main')({
    backgroundColor: '#0B192F',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover'

})

const Root = styled("div")({
    padding: 0,
    margin: -10,
  });

interface titleProps {
    title: string
}


const Dividers = (props: titleProps) => {
    return (
        <Stack mt='100px' direction = 'row' width='60%' alignItems='center' justifyContent='space-between'>
            <Typography variant='h4' color='primary.light'>
                {props.title}.
            </Typography>
            <Divider variant='inset' color='primary.light' sx={{width:'75%', background: 'primary.light'}} />
        </Stack>
    )
}

const Footer = () => {
    return (
    <Typography variant='body2' color='primary' mb='20px'>© 2023 Designed & Built by 
    <Link href='https://github.com/swigguma5776/Portfolio_v2' target='_blank' color='secondary' sx={{textDecoration:'none'}}> Alex Swiggum</Link>
    </Typography>
    )
}

  

export const Home = () => {
    return (
        <Root>
            <Main>
                <Stack direction='column' alignItems='center'>
                    <Hero />
                    <Dividers title='About Me'/>
                    <About />
                    <Dividers title='My Projects'/>
                    <Projects />
                    <Dividers title='Contact Me'/>
                    <Contact />
                    <Footer />
                </Stack>
            </Main>
        </Root>
    )
}