import React from 'react'; 
import {
    Stack,
    Typography } from '@mui/material'; 
import Grid from "@mui/material/Grid";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const techList = [
    'Python',
    'Flask',
    'JavaScript (ES6)',
    'TypeScript',
    'React',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Ajax'
]

export const About = () => {
    return (
        <Stack direction = 'column' width='60%' padding='30px' mt='50px'>
            <Typography variant='body1' color='primary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <br />
            <Typography variant='body1' color='primary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <br />
            <Typography variant='h6' color='primary.light' mb='20px' mt='20px'>
                Technologies I work with.
            </Typography>
            <Grid container spacing={3}>
                {techList.map((tech: any, index: any) => (
                <Grid item key={index} sm={6} xs={4} md={2}>
                    <Stack direction = 'row' alignItems='center'>
                    <CheckCircleOutlineIcon color='secondary' sx={{fontSize:20}}/>
                    <Typography variant='body1' color='secondary'>{tech}</Typography>
                    </Stack>
                </Grid>
                ))}
            </Grid>

        </Stack>
    )
}