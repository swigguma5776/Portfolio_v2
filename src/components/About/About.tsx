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
    'Docker',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Apache Jmeter'
]

export const About = () => {
    return (
        <Stack direction = 'column' width='60%' padding='30px' mt='50px'>
            <Typography variant='body1' color='primary'>
            As a dedicated back-end engineer with a little bit of front-end knowledge too, I bring a unique perspective to the world of software development, leveraging my 
            background as an interior architect to craft elegant and structurally sound digital solutions. Drawing upon my experience 
            in understanding how components seamlessly come together in the built environment, I apply the same meticulous attention 
            to detail when designing and optimizing the back-end systems that power modern applications.
            Along with my keen eye for detail, I have developed strong project management abilities, and an enthusiasm for solving complex problems. 
            </Typography>
            <br />
            <Typography variant='body1' color='primary'>
            I currently share my expertise and passion for programming as a Lead Software Engineer Instructor, where I've had the opportunity 
            to guide aspiring developers for the past year. This experience has not only solidified my technical knowledge but 
            also has enhanced my ability to communicate complex concepts in a clear and concise manner. With my diverse background 
            and years of experience, I approach software engineering with a unique perspective, combining my architectural sensibilities 
            with my technical expertise to create optimized and scalable applications that prioritize user experience.
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