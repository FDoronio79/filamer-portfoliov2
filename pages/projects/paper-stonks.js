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
                    Paper Stonks <Badge>2022 - 2023</Badge>
                </Title>
                <P>
                    Paper Stonks is a fully deployed application geared toward traders/investors to practice their positions sweat-free.
                    Our approach was to create an elegant yet simple application so as not to overwhelm new traders but still provide experienced users with the necessary tools for success.
                    We used the following technologies to build the application: Fast API, React, Chart.js, Alpha Vantage API, PostgreSQL, GitLab CI/CD pipeline, and Heroku.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://apex-legends1.gitlab.io/paper-stonks' target='_blank'>Paper Stonks</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Fast API, React, GitLab CI/CD, Heroku, Chart.js, PostgreSQL, Docker</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Contributors</Meta>
                        <span>Filamer Doronio, Matthew Young, Leo Shon, Jessica Lora</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://gitlab.com/apex-legends1/paper-stonks' target='_blank'>GitLab - Paper Stonks</Link>
                    </ListItem>
                </List>
                <ProjectImage src='/images/projects/paper-stonks-dashboard.png' />
                <ProjectImage src='/images/projects/paper-stonks-stock-page.png' />
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/MAnchWtrKSk"
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