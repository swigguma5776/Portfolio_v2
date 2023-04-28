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
import project1_image from '../../assets/images/mvie.png'; 
import project2_image from '../../assets/images/carbongalaxy.png'

const myStyles = {
    projectImages: {
        height: '100px',
        width: '100px'
    },
    hoverStyles: {
        height: '350px',
        width: '1500px',
        curser: 'pointer',
        ':hover': {
            color: 'white',
            backgroundColor: 'white'
        }
    }
}

const myProjects = {
    project1: {
        title: 'Mvie',
        description: `A fullstack web app for creating a shared watchlist amongst friends/family. Browse 
        movies/shows based on numerous criteria, get recommended shows, create shared watchlists (Hubs), and rate and review shows together`,
        techStack: ['React', 'Flask', 'ElephantSQL', 'GoogleFirebase', 'Glitch'],
        githubLink: "https://github.com/swigguma5776/Mvie_Streaming",
        appLink: "https://mvie-app.web.app/",
        image: project1_image
    },
    project2: {
        title: 'Carbon Galaxy',
        description: `A fullstack web app for creating a shared watchlist amonst friends/family. Browse 
        movies/shows based on numerous criteria, get recommended shows, create shared watchlists (Hubs), and rate and review shows together`,
        techStack: ['React', 'Flask', 'ElephantSQL', 'GoogleFirebase', 'Glitch'],
        githubLink: "https://github.com/swigguma5776/Carbon_Galaxy",
        appLink: "https://carbon-galaxy-app.web.app/",
        image: project2_image
    },
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
    <Stack direction='column' alignItems='center' justifyContent='center' width='100%' height='500px'>
            <Stack width='60%' height='700px' alignItems='center' justifyContent='space-between' direction = {{xs: 'column', sm: 'row'}}>
                <Button style={myStyles.hoverStyles}>
                    <img src={props.project.image} style={{maxHeight: '100%', width: '100%'}}/>
                </Button>
                <Stack ml='50px' direction = 'column' width='100%'>
                    <Typography variant='h4' color='primary.light'>{props.project.title}</Typography>
                    <Typography variant='body1' mt='20px' color='primary'>{props.project.description}</Typography>
                    <Stack justifyContent='space-between' direction ='row' mt='20px'>
                        {props.project.techStack.map((tech: any, index: any) => (
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
                        {props.project.techStack.map((tech: any, index: any) => (
                                <Typography variant='body2' color='secondary'>{tech}</Typography>
                            ))}
                    </Stack>
                    <Stack direction='row' left="0px" mt='10px' ml='-5px'>
                        <IconButton href={props.project.githubLink} target='_blank' color='primary'><GitHubIcon /></IconButton>
                        <IconButton href={props.project.appLink} target='_blank'color='primary'><VisibilityIcon /></IconButton>
                    </Stack>     
                </Stack>
                <Button style={myStyles.hoverStyles}>
                    <img src={props.project.image} style={{maxHeight: '100%', width: '100%'}}/>
                </Button>
            </Stack>
        </Stack>
    )
}

export const Projects = () => {
    return (
        <Stack>
            <ProjectLeft project={myProjects.project1} />
            <ProjectRight project={myProjects.project2} />
            <ProjectLeft project={myProjects.project1} />
        </Stack>
    )
}