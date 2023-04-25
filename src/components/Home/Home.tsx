import React from 'react';
import { Typography } from '@mui/material'; 
import { About } from '../About'; 
import { Hero } from '../Hero'; 
import { styled } from '@mui/system'
import { Stack } from '@mui/material'; 

const Main = styled('main')({
    backgroundColor: '#0B192F',
    width: '100%',
    height: '100%'

})

const Root = styled("div")({
    padding: 0,
    margin: 0,
  });


export const Home = () => {
    return (
        <Root>
            <Main >
                <Stack direction='column' alignItems='center'>
                    <Hero />
                    <About />
                </Stack>
            </Main>
        </Root>
    )
}