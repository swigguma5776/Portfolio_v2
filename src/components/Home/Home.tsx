import React from 'react';
import { About } from '../About'; 
import { Hero } from '../Hero'; 
import { Projects } from '../Projects';
import { styled } from '@mui/system'
import {  
    Stack,
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


export const Dividers = (props: titleProps) => {
    return (
        <Stack mt='75px' direction = 'row' width='60%' alignItems='center' justifyContent='space-between'>
            <Typography variant='h4' color='primary.light'>
                {props.title}.
            </Typography>
            <Divider variant='inset' color='primary.light' sx={{width:'75%', background: 'primary.light'}} />
        </Stack>
    )
}

  

export const Home = () => {
    return (
        <Root>
            <Main >
                <Stack direction='column' alignItems='center'>
                    <Hero />
                    <Dividers title='About Me'/>
                    <About />
                    <Dividers title='My Projects'/>
                    <Projects />
                </Stack>
            </Main>
        </Root>
    )
}