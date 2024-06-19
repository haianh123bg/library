import { Box, Container, Link, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: 'primary.main',
                color: 'white',
                py: 3,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} 2N_HA Library. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center">
                    <Link href="/privacy-policy" color="inherit" underline="hover">
                        Privacy Policy
                    </Link>
                    {' | '}
                    <Link href="/terms-of-service" color="inherit" underline="hover">
                        Terms of Service
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};
