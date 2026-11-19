import NextLink from 'next/link';
import {
    Link,
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    List,
    ListItem,
    Badge,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { BioSection, BioYear } from '../components/bio';
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius='lg'
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                    Hello, I&apos;m a full-stack software engineer based in Honolulu, Hawai&apos;i!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Filamer Doronio
                        </Heading>
                        <p>Full Stack Software Engineer, Food Enjoyer, Avid hiker in spirit</p>
                        <Wrap mt={2} spacing={2}>
                            <WrapItem>
                                <Badge colorScheme="green" variant="subtle" fontSize="0.8em" px={2} py={1} borderRadius="md">
                                    Open to work
                                </Badge>
                            </WrapItem>
                            <WrapItem>
                                <Badge colorScheme="teal" variant="subtle" fontSize="0.8em" px={2} py={1} borderRadius="md">
                                    Open to relocation
                                </Badge>
                            </WrapItem>
                        </Wrap>
                        {/* <p>Front-End: JavaScript, React, Tailwind, Redux, ReactRedux, Axios</p>
                <p>Back-End: JavaScript, Python, Express, FastAPI, Django, RestAPIs</p> */}
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
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
                            src="/images/headshot.JPG"
                            width="100px"
                            height="100px"
                            objectFit="cover"
                            alt="profile picture"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Intro
                    </Heading>
                    <Paragraph>
                        Hello World! I am Filamer Doronio a full-stack developer based in Honolulu
                        who loves crafting innovative solutions. My background includes Finance and Business Analytics,
                        and I transitioned to software engineering driven by my passion for tech.
                        I honed my skills at HackReactor&apos;s boot camp and spent 3.5 years as a Web Developer at Thryv, building
                        listings, call tracking and reviews features with React, TypeScript and Node.js.
                        I&apos;m currently building Pack Check, a catering order and QR-tracked packing platform, with The Node Forge.
                        I&apos;m open to new full-stack roles and happy to relocate for the right opportunity.
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
                        Born in Manila, Philippines
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2018 to 2019
                        </BioYear>
                        Worked at New York Life as a Financial Services Professional
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2019
                        </BioYear>
                        Completed BBA in Finance from the Shidler College of Business at The University of Hawai&apos;i
                        at Mānoa
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2020 to 2022
                        </BioYear>
                        Worked at Unisys as a Business/Quality Assurance Analyst
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022
                        </BioYear>
                        Earned a Certificate in Advanced Software Engineering from HackReactor
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022 to 2023
                        </BioYear>
                        Worked as a Resident for HackReactor&apos;s 19 week boot camp
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2023 to 2026
                        </BioYear>
                        Worked as a Web Developer for Thryv
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2026 to Present
                        </BioYear>
                        Building Pack Check with The Node Forge (work in progress)
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Photography, Technology, Cars, Video games, Film, Music
                    </Paragraph>
                </Section>
                <Section delay={.4}>
                    <Heading as="h3" variant="section-title">
                        What I&apos;m Listening To
                    </Heading>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/3mq8ftnufR3Md060m01Ei1?utm_source=generator"
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </Section>

                <Section delay={.5}>
                    <Heading as="h3" variant="section-title">
                        On the Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/FDoronio79" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @FDoronio79
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:filamerd.dev@gmail.com" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<EmailIcon />}
                                >
                                    filamerd.dev@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/fdoronio/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoLinkedin />}
                                >
                                    Filamer Doronio
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;