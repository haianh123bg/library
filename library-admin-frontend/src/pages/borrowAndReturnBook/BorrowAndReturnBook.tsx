import { Box } from '@mui/material';
import PrimarySearchAppBar from '../../layouts/header/Header';
import { Footer } from '../../layouts/footer/Footer';
import { TabPanelBorrowAndReturnBook } from './components/TabPanelBorrowAndReturnBook';

export const BorrowAndReturnBook = () => {
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
                <TabPanelBorrowAndReturnBook />
            </Box>
            <Footer />
        </Box>
    );
};
