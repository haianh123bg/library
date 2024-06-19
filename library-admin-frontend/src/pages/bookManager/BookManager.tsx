import { Box, Container } from '@mui/material';
import PrimarySearchAppBar from '../../layouts/header/Header';
import { Footer } from '../../layouts/footer/Footer';

import TabPanelBookManager from './components/TabPanelBookManager';

export const BookManager = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <PrimarySearchAppBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 2,
                    py: 3,
                }}
            >
                <TabPanelBookManager />
            </Box>
            <Footer />
        </Box>
    );
};
