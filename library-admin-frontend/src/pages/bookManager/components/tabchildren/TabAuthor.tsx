import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { AuthorTable } from '../utils/AuthorTable';
import AuthorModel from '../../../../models/AuthorModel';
import { Button, CircularProgress, IconButton, Snackbar } from '@mui/material';
import { AuthorChart } from '../utils/AuthorChart';
import { GridCloseIcon } from '@mui/x-data-grid';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const TabAuthor = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [authors, setAuthors] = React.useState<AuthorModel[]>([]);
    const [isLoadingAuthors, setIsLoadingAuthors] = React.useState(true);
    const [errorAuthors, setErrorAuthors] = React.useState(null);
    React.useEffect(() => {
        const fetchAuthors = async () => {
            const baseUrl: string = `http://localhost:8000/authors`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();
            const responseData = responseJson.result;

            const loadedAuthors: AuthorModel[] = [];
            for (const key in responseData) {
                loadedAuthors.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    total_book: responseData[key].totalBook,
                    image: responseData[key].image,
                });
            }
            setAuthors(loadedAuthors);
            setIsLoadingAuthors(false);
        };
        fetchAuthors().catch((error) => {
            console.log(error.message);
            setIsLoadingAuthors(false);
        });
    }, []);

    //
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState({ id: 0, name: '' });

    const handleClick = (id: number, name: string) => {
        setMessage({ id, name });
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose} sx={{ color: 'white' }}>
                UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <GridCloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleDeleteAuthors = (authorId: number) => {
        setIsLoadingAuthors(true);
        const fetchDeleteCategory = async () => {
            const baseUrl: string = `http://localhost:8000/authors/${authorId}`;

            const options = {
                method: 'DELETE', // Phương thức HTTP DELETE
                headers: {
                    'Content-Type': 'application/json', // Đặt loại nội dung, nếu cần
                    // Bạn có thể thêm các headers khác tại đây, nếu cần
                },
            };

            const response = await fetch(baseUrl, options);
            if (!response.ok) {
                // Xử lý lỗi nếu có
                throw new Error('Network response was not ok ' + response.statusText);
            }
            setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== authorId));
            setIsLoadingAuthors(false);
            handleClick(1, 'Xóa tác giả thành công');
        };
        fetchDeleteCategory().catch((error) => {
            setIsLoadingAuthors(false);
            handleClick(0, 'Xóa tác giả không thành công');
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Bảng tác giả" {...a11yProps(0)} />
                    <Tab label="Thêm tác giả" {...a11yProps(1)} />
                    <Tab label="Sửa tác giả" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    {isLoadingAuthors ? (
                        <Box sx={{ width: '48%' }}>
                            <CircularProgress disableShrink />
                        </Box>
                    ) : (
                        <AuthorTable handleDeleteAuthors={handleDeleteAuthors} authors={authors} />
                    )}
                    <AuthorChart
                        authors={authors.filter((author) => {
                            return author.total_book !== undefined && author.total_book > 0;
                        })}
                    />
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>

            {/**
             *
             */}
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message.name}
                    action={action}
                    ContentProps={{
                        style: {
                            backgroundColor: message.id == 1 ? 'green' : 'red',
                            color: 'white',
                        },
                    }}
                />
            </div>
        </Box>
    );
};
