import {
    Container,
    Badge,
    Alert,
    AlertIcon,
    List,
    ListItem,
    UnorderedList,
    Heading
} from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Pack Check">
            <Container>
                <Title>
                    Pack Check <Badge>Nov 2026 - Present</Badge>{' '}
                    <Badge colorScheme="yellow">Work in progress</Badge>
                </Title>
                <Alert status="warning" borderRadius="lg" mb={4}>
                    <AlertIcon />
                    Pack Check is under active development. Features, screenshots and
                    details on this page will change as the project grows.
                </Alert>
                <P>
                    Pack Check is a multi-tenant catering order and production platform with
                    QR-tracked packing. Caterers share the platform, and each one has its own staff
                    (admin, back office, kitchen, drivers, finance) and client accounts. Orders move
                    from quote to confirmed, then through packing, where every box gets a QR label
                    that staff scan to verify it holds the right items before it goes out the door.
                </P>
                <Heading as="h4" fontSize={16} mt={6} mb={2}>
                    What I built
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1}>
                    <ListItem>
                        Authentication and access control with React, TypeScript and Supabase: sign-up,
                        login, password reset, invitations, and role-based routing for 8 staff and client
                        roles, with PostgreSQL Row Level Security enforcing tenant isolation
                    </ListItem>
                    <ListItem>
                        The responsive app shell and a live operations dashboard that loads the day&apos;s
                        orders, box status, scans and allergen alerts in one round of parallel queries,
                        refreshing every 60 seconds
                    </ListItem>
                    <ListItem>
                        The pack-and-scan station, built on a teammate&apos;s QR scanner: it checks each box
                        against its order and records the result through a database trigger, with guards
                        against double submits
                    </ListItem>
                    <ListItem>
                        42 unit and 16 integration tests with Vitest
                    </ListItem>
                </UnorderedList>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Status</Meta>
                        <span>Work in progress, not yet publicly released</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            React, TypeScript, Vite, Supabase (PostgreSQL, Auth, Realtime), Terraform,
                            Docker, GitHub Actions, Cloudflare Workers, Vitest
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Contributors</Meta>
                        <span>Filamer Doronio, Lanny MacMillan, Andrew Gomez</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <span>Private repository (The Node Forge)</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/packcheck_cover.png" alt="Pack Check" />
            </Container>
        </Layout>
    )
}

export default Project
