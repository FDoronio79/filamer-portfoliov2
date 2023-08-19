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

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <ProjectGridItem
                id="paper-stonks"  
                title="Paper Stonks" 
                thumbnail={thumbPaperStonks}
                >
                    A sweat free paper trading app for users to practice
                    and hone their trading strategies using live market data.
                </ProjectGridItem>
            </SimpleGrid>
        </Container>
    )
}

export default Projects