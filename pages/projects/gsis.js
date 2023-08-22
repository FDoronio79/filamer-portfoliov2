import {
    Container,
    Badge,
    List,
    ListItem,
} from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Galvanize">
            <Container>
                <Title>
                    Galvanize SIS <Badge>Nov. 2022 - Apr. 2023</Badge>
                </Title>
                <P>
                    A student information system that helps manage Galvanize - Hack Reactor&apo;s student data.
                    The website provides features such as course material, course recordings, and grade tracking.
                    While working for Galvanize I implemented features that included a date parser, cohort calendar generator,
                    and various bug fixes/enhancements.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Django, Nginx, GitLab CI/CD, SQLite, Docker, Heroku, Bulma</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Contributions</Meta>
                        <span>
                            Calendar Generator, Bug Fixes, Code Enhancements, Various Filters
                        </span>
                    </ListItem>
                </List>
                <ProjectImage src='/images/projects/gsis_1.png' />
                <ProjectImage src='/images/projects/gsis_2.png' />
                <ProjectImage src='/images/projects/gsis_3.png' />
            </Container>
        </Layout>
    )
}

export default Project