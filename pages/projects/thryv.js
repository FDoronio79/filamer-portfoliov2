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
        <Layout title="Thryv - Marketing Center">
            <Container>
                <Title>
                    Thryv - Marketing Center <Badge>May 2023 - Present</Badge>
                </Title>
                <P>
                    Thryv - Marketing Center is a cloud based platform that helps business create, manage, and track their marketing campaigns
                    across multiple channels. It offers features such as campaign planning, content creation, lead generation, and analytics. I currently work
                    on the team that developed and maintains this feature of Thryv as a Web Developer. Some of my responsibilities include bug fixes, developing features, and maintaining code base.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                        <Link href='https://www.thryv.com/' target='_blank'>
                        Thryv <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Express.js, Node.js, React, AWS, Redux, React-Redux</span>
                    </ListItem>
                </List>
                <ProjectImage src='/images/projects/thryv_mc_overview.png' alt="overview"/>
                <ProjectImage src='/images/projects/thryv_mc_create_campaign.png' alt="create campaign" />
                <ProjectImage src='/images/projects/thryv_mc_gmb.png' alt="google my business" />
            </Container>
        </Layout>
    )
}

export default Project