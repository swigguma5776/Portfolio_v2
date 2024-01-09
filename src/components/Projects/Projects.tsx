import React from 'react';
import { Avatar,
    Box,
    Button,
    Grid,
    Stack,
    Typography } from '@mui/material'; 
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import project1_image from '../../assets/images/recipeapi.png'; 
import project2_image from '../../assets/images/mvie2.png'; 
import project3_image from '../../assets/images/carbongalaxy.png';
import project4_image from '../../assets/images/project4.png';

const myStyles = {
    projectImages: {
        height: '100%',
        width: '100%',
        borderRadius: '5px',
    },
    hoverStyles: {
        height: {md:'360px'},
        width: {md:'1500px', sm: '125%'},
        curser: 'pointer',
        ':hover': {
            backgroundColor: '#55D7BB',
            backgroundOpacity: '25%',
            opacity: '50%'
        }
    }
}

const myProjects = {
    project1: {
        title: 'Recipe API',
        description: `An advanced RESTful API built with Django REST Framework, Docker, a Postgres database and deployed
        using AWS EC2 Linux server that allows full CRUD operations for creating & managing recipes, adding filters and uploading images. 
        This API also leverages key development strategies/tools such as Test Driven Development (TDD), Github Actions, 
        Travis-CI code checks and a local development server built in Docker. `,
        techStack: ['Django', 'Docker', 'EC2', 'Github Actions', 'PostgreSQL'],
        githubLink: "https://github.com/swigguma5776/recipe-app-api",
        appLink: "http://ec2-44-203-95-127.compute-1.amazonaws.com/api/docs/",
        image: project1_image
    },
    project2: {
        title: 'Mvie',
        description: `A fullstack web app for creating a shared watchlist amongst friends/family. Browse 
        movies/shows based on numerous criteria, get recommended shows, create shared watchlists (Hubs), and rate and review shows together`,
        techStack: ['ElephantSQL', 'Flask', 'Glitch', 'GoogleFirebase', 'React'],
        githubLink: "https://github.com/swigguma5776/Mvie_Streaming",
        appLink: "https://mvie-app.web.app/",
        image: project2_image
    },
    project3: {
        title: 'Carbon Galaxy',
        description: `A fullstack web app that enables users to input website URLs and receive 
        comprehensive carbon emissions data, empowering them to make sustainable choices. The collected emissions data is efficiently stored 
        on a personalized user dashboard, fostering awareness about the global impact even web searching has.`,
        techStack: ['ElephantSQL', 'Flask', 'Glitch', 'GoogleFirebase', 'React'],
        githubLink: "https://github.com/swigguma5776/Carbon_Galaxy",
        appLink: "https://carbon-galaxy-app.web.app/",
        image: project3_image
    },
    
    // project4: {
    //     title: 'Weather App',
    //     description: `A simple and clean weather app programmed with vanilla JavaScript, HTML & CSS that allows users to search for weather 
    //     updates for cities worldwide. `,
    //     techStack: ['JavaScript', 'HTML', 'CSS', 'Heroku'],
    //     githubLink: "https://github.com/swigguma5776/Current-Weather-Api_JavaScript",
    //     appLink: "https://alexweather-app.herokuapp.com/",
    //     image: project4_image
    // },
}

interface projectProps {
    project: {
        title: string,
        description: string,
        techStack: Array<string>,
        githubLink: string,
        appLink: string,
        image: string
    }
}

export const ProjectLeft = (props: projectProps) => {
    console.log(props.project.techStack)
    return (
    <Stack direction='column' alignItems='center' justifyContent='center' width='100%' height='500px' mt='20px'>
            <Stack width='60%' height='700px' mt={{xs: '50px', md: '0px'}} alignItems={{md:'center', xs: 'start'}} justifyContent='space-between' direction = {{xs: 'column', sm: 'row'}}>
                {window.innerWidth < 600 ? <Typography variant='h4' color='primary.light'>{props.project.title}</Typography> : ""}
                <Button sx={myStyles.hoverStyles} href={props.project.appLink} target="_blank">
                    <img src={props.project.image} style={myStyles.projectImages}/>
                </Button>
                <Stack sx={{ ml: {md:'50px', sm:'0px'}}} direction = 'column' width='100%'>
                    {window.innerWidth > 600 ? <Typography variant='h4' color='primary.light'>{props.project.title}</Typography> : "" }
                    <Typography variant='body1' mt='20px' color='primary'>{props.project.description}</Typography>
                    <Stack justifyContent='space-between' direction ='row' mt='20px'>
                        {props.project.techStack.map((tech: any) => (
                                <Typography variant='body2' color='secondary'>{tech}</Typography>
                            ))}
                    </Stack>
                    <Stack direction='row' left="0px" mt='10px' ml='-5px'>
                        <IconButton href={props.project.githubLink} target='_blank' color='primary'><GitHubIcon /></IconButton>
                        <IconButton href={props.project.appLink} target='_blank'color='primary'><VisibilityIcon /></IconButton>
                    </Stack>     
                </Stack>
            </Stack>
        </Stack>
    )
}

export const ProjectRight = (props: projectProps) => {
    console.log(props.project.techStack)
    return (
    <Stack direction='column' alignItems='center' justifyContent='center' width='100%' height='500px'>
            <Stack width='60%' height='700px' alignItems='center' justifyContent='space-between' direction = {{xs: 'column', sm: 'row'}}>
                <Stack mr='50px' direction = 'column' width='100%' alignItems='end' textAlign='end'>
                    <Typography variant='h4' color='primary.light'>{props.project.title}</Typography>
                    <Typography variant='body1' mt='20px' color='primary'>{props.project.description}</Typography>
                    <Stack justifyContent='space-between' direction ='row' mt='20px' width='100%'>
                        {props.project.techStack.map((tech: any) => (
                                <Typography variant='body2' color='secondary'>{tech}</Typography>
                            ))}
                    </Stack>
                    <Stack direction='row' left="0px" mt='10px' ml='-5px'>
                        <IconButton href={props.project.githubLink} target='_blank' color='primary'><GitHubIcon /></IconButton>
                        <IconButton href={props.project.appLink} target='_blank'color='primary'><VisibilityIcon /></IconButton>
                    </Stack>     
                </Stack>
                <Button sx={myStyles.hoverStyles} href={props.project.appLink} target='_blank'>
                    <img src={props.project.image} style={myStyles.projectImages}/>
                </Button>
            </Stack>
        </Stack>
    )
}

export const Projects = () => {
    return (
        <Stack>
            <ProjectLeft project={myProjects.project1} />
            {window.innerWidth < 720 ? <ProjectLeft project={myProjects.project2} /> : <ProjectRight project={myProjects.project2} />}
            <ProjectLeft project={myProjects.project3} />
        </Stack>
    )
}