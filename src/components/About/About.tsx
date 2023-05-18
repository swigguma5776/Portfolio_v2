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
    'AWS',
    'Apache Jmeter'
]

export const About = () => {
    return (
        <Stack direction = 'column' width='60%' padding='30px' mt='50px'>
            <Typography variant='body1' color='primary'>
            As a full stack software engineer specializing in Python/Flask back-end development and JavaScript/React 
            front-end development, I bring a unique blend of technical expertise and creative problem-solving skills to my work. 
            With six years of experience as a licensed Interior designer for a nationally recognized firm, I developed a keen 
            eye for detail, strong project management abilities, and an enthusiasm for solving complex problems. However, 
            my journey took an unexpected turn when I discovered a deep passion for coding. This led me to enroll in a coding 
            bootcamp where I honed my skills and quickly excelled in both back-end and front-end development.
            </Typography>
            <br />
            <Typography variant='body1' color='primary'>
            Driven by my newfound passion, I was invited to join the coding bootcamp as an instructor, where I've had the opportunity 
            to guide and inspire aspiring developers for the past year. This experience has not only solidified my technical knowledge but 
            also has enhanced my ability to communicate complex concepts in a clear and concise manner. With my diverse background 
            and years of experience, I approach software engineering with a unique perspective, combining my design sensibilities 
            with my technical expertise to create intuitive and visually appealing applications that prioritize user experience.
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