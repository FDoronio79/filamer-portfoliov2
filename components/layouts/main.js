import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../navbar'
import NoSsr from '../no-ssr';
import { Box, Container } from '@chakra-ui/react';
import VoxelLaptopLoader from '../voxel-laptop-loader';

const LazyVoxelLaptop = dynamic(() => import('../voxel-laptop'), {
    ssr: false,
    loading: () => <VoxelLaptopLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta description="Filamer's Portfolio"/>
                <meta name="author" content="Filamer Doronio" />
                <link rel="icon" href="/images/web-coder-icon.png" type="image/png" />
                <title>Filamer Doronio - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <LazyVoxelLaptop />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main