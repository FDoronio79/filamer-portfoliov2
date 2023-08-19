import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Paper Stonks">
            <Container>
                <Title>
                    Carventory <Badge>2022</Badge>
                </Title>
                <P>
                A web application that handles interactions between a dealership and its customers. Provides inventory tracking of car models, vehicle sales/history and service appointments board/logs.
                Includes employee management as well as a customer bookings.
                    <p>- Created a dynamic front-end user interface using React.js for appointment microservice</p>
                    <p>- Developed RESTful APIs for data access using Django for the appointment microservice</p>
                    <p>- Collaborated as a team with others using GitLab version control</p>
                    <p>- Designed and built data model architecture and microservices structure using Django models and Docker containerization</p>
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Django, React, GitLab CI/CD, SQLite, Docker</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Contributors</Meta>
                        <span>Filamer Doronio, Jessica Lora</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://gitlab.com/DoronioF/carventory' target='_blank'>
                        GitLab - Carventory <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src='/images/projects/create_pts.png' />
                <ProjectImage src='/images/projects/Carventory_appointments.png' />
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/FE6oXeJIudQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project