import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [<Button key="one">Thêm sách</Button>];

export default function GroupOrientation() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="contained">
                {buttons}
            </ButtonGroup>
        </Box>
    );
}
