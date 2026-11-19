import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
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
                    Thryv - Marketing Center <Badge>Apr 2023 - Nov 2026</Badge>
                </Title>
                <P>
                    Thryv - Marketing Center is a cloud based platform that helps small businesses create, manage, and track their marketing
                    across multiple channels, including business listings syndicated to 10+ publishers such as Google, Yelp, Apple, and Facebook.
                    From 2023 to 2026 I worked on it as a Web Developer, building features across the React front end and Node.js back end.
                </P>
                <Heading as="h4" fontSize={16} mt={6} mb={2}>
                    Highlights
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1}>
                    <ListItem>
                        Built core features of a ground-up TypeScript/React rewrite of the Listings Manager, including an
                        end-to-end Call Tracking page built on React Query
                    </ListItem>
                    <ListItem>
                        Launched listings support in 4 countries (US, Canada, Australia, New Zealand) with a country-aware
                        business category API and per-country phone validation
                    </ListItem>
                    <ListItem>
                        Owned call tracking across the front end and back end and resolved 20+ production support escalations
                    </ListItem>
                    <ListItem>
                        Restored page access for non-primary users by migrating lookups off a deprecated Auth0 metadata field
                        across 25 backend API routes
                    </ListItem>
                    <ListItem>
                        Raised call tracking test coverage to ~90% with Jest and React Testing Library
                    </ListItem>
                    <ListItem>
                        Integrated the Yext, Yelp, and internal reviews APIs for review replies, Yelp Request-a-Quote, and
                        review ingestion in Australia and New Zealand
                    </ListItem>
                </UnorderedList>
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                        <Link href='https://www.thryv.com/' target='_blank'>
                        Thryv <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, TypeScript, React Query, Redux, Node.js, Express, Auth0, Jest, React Testing Library</span>
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