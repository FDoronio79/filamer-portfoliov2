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
                    >
                        <Link 
                            href="/images/pdfs/Filamer_Doronio_Resume.pdf">
                            Download Resume <DownloadIcon mx="2px" />
                        </Link>
                    </Button>
                </ListItem>
            </List>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 100px)" // Adjust the value to account for header and spacing
            >
                <img
                    src="/Resume.png"
                    alt="Resume"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '100%',
                    }}
                />
            </Box>
        </Container>
    )
}

export default Resume