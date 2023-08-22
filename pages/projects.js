/* eslint-disable */
import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
/* eslint-disable */
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbPaperStonks from '../public/images/projects/paper-stonks-hp.png'
import Carventoryhp from '../public/images/projects/Carventory_hp.png'
import Thryvcp from '../public/images/projects/thryv_cover_page.png'
import Gsis from '../public/images/projects/gsis_home_page.png'
import Layout from '../components/layouts/article'


const Projects = () => {
    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h3" fontsize={20} mb={4}>
                    Portfolio
                </Heading>
                <Heading as="h3" fontSize={20} mb={4}>
                    Personal Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem
                            id="paper-stonks"
                            title="Paper Stonks"
                            thumbnail={thumbPaperStonks}
                        >
                            A sweat free paper trading app for users to practice
                            and hone their trading strategies using live market data.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem
                            id="carventory"
                            title="Carventory"
                            thumbnail={Carventoryhp}
                        >
                            A dealer focused application that allows for streamlined management of sales, inventory, and service appointments.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Professional Work / Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem
                            id="thryv"
                            title="Thryv Marketing Center"
                            thumbnail={Thryvcp}
                        >
                            An all-in-one software centered around small business to make life easier for day to day operations.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem
                            id="gsis"
                            title="Galvanize SIS"
                            thumbnail={Gsis}
                        >
                            A website that houses the curriculum and all information for the Hack Reactor Bootcamp.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Projects