import {
    Container,
    Heading,
    Box,
    Button,
    Link,
    List,
    ListItem,
    Badge
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import Image from 'next/image'


const Resume = () => {
    return (
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                Resume
            </Heading>
            <List ml={4} my={4}>
                <ListItem>
                    <Badge colorScheme="green" mr={2} mt={4}>
                        Check me Out!
                    </Badge>
                    <Button
                        mt={4}
                        size="sm"
                        as="a"
                        href="/images/pdfs/Filamer_Doronio_Resume.pdf"
                        download="Filamer_Doronio_Resume.pdf"
                        target="_blank"
                    >
                        Download Resume <DownloadIcon mx="2px" />
                    </Button>
                </ListItem>
            </List>
            <Box display="flex" justifyContent="center" mb={8}>
                <Link
                    href="/images/pdfs/Filamer_Doronio_Resume.pdf"
                    target="_blank"
                >
                    <Image
                        src="/Resume.png"
                        alt="Resume"
                        width={1313}
                        height={1700}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Link>
            </Box>
        </Container>
    )
}

export default Resume