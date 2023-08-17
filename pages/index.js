import NextLink from 'next/link';
import { 
    Container, 
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Page = () => {
    return (
        <Container>
            <Box 
                borderRadius='lg'
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I&apos;m a full-stack software engineer based in California!
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Filamer Doronio
                </Heading>
                <p>Full Stack Software Engineer, Food Enjoyer, Avid hiker in spirit</p>
                {/* <p>Front-End: JavaScript, React, Tailwind, Redux, ReactRedux, Axios</p>
                <p>Back-End: JavaScript, Python, Express, FastAPI, Django, RestAPIs</p> */}
            </Box>
            <Box 
                flexShrink={0} 
                mt={{ base:4, md:0 }}
                ml={{ md: 6 }}
                align="center"
            >
                <Image 
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/cenamidi.png"
                    alt="profile picture"
                />
            </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Intro
                </Heading>
                <Paragraph>
                    Hello World! I am Filamer Doronio a full-stack developer based in San Francisco
                    who loves crafting innovative solutions. My background includes Finance and Business Analytics,
                    and I transitioned to software engineering driven by my passion for tech.
                    I honed my skills at HackReactor&apos;s boot camp. Currently working as a Web Developer, I&apos;m also keen on new prospects.
                    Beyond coding, I&apos;m into photography, interior design, and spending time with friends.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>
                        1997
                    </BioYear>
                    Born in Manila, Philippines.
                </BioSection>
                <BioSection>
                    <BioYear>
                        2015
                    </BioYear>
                    Completed BBA in Finance from the Shidler College of Business at The University of Hawai&apos;i
                    at Mānoa.
                </BioSection>
                <BioSection>
                    <BioYear>
                        2020 to 2022 
                    </BioYear>
                    Worked at Unisys as a Business/Quality Assurance Analyst
                </BioSection>
                <BioSection>
                    <BioYear>
                        2022 to 2023
                    </BioYear>
                    Worked as a Resident for HackReactor&apos;s 19 week boot camp
                </BioSection>
                <BioSection>
                    <BioYear>
                        2023 to Present
                    </BioYear>
                    Working as a Web Developer for Thryv
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Photography, Technology, Cars, Videogames, Film
                </Paragraph>
            </Section>

            <Section delay={.4}>
                <Heading as="h3" variant="section-title">
                    On the Web
                </Heading>
            </Section>
        </Container>
    )
}

export default Page;