import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BookModel from '../../../../models/BookModel';
import { BookTable } from '../utils/BookTable';
import { Button, CircularProgress, IconButton, Snackbar } from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';
import { BookFormAdd } from '../utils/BookFormAdd';

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

export default function TabBook() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    //
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoadingBooks, setIsLoadingBooks] = useState(true);
    const [message, setMessage] = useState({ id: 0, name: '' });

    const [book, setBook] = useState<BookModel>();

    const [trigger, setTrigger] = useState(false);

    const [bookId, setBookId] = useState(undefined);

    const handleBookEditById = (event: React.SyntheticEvent, bookId: number) => {
        const fetchBookById = async () => {
            const baseUrl: string = `http://localhost:8000/books/${bookId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            const responseData = responseJson.result;
            console.log(responseData);

            const loadedBook: BookModel = {
                id: responseData.id,
                name: responseData.name,
                inventory_number: responseData.inventoryNumber,
                ratings_star: responseData.ratingsStar ?? 0,
                price: responseData.price,
                description: responseData.description,
                language: responseData.language,
                size: responseData.size,
                weight: responseData.weight,
                page_number: responseData.pageNumber,
                publishing_year: responseData.publishingYear,

                publisher: {
                    id: responseData.publisher?.id,
                    name: responseData.publisher?.name,
                },

                author: {
                    name: responseData.author?.name,
                    id: responseData.author?.id,
                },

                category: {
                    name: responseData.category?.name,
                    id: responseData.category?.id,
                },
                images: [
                    {
                        id: responseData.images[0]?.id,
                        link: responseData.images[0]?.link,
                        data: responseData.images[0]?.data,
                    },
                ],
            };
            setBook(loadedBook);
            console.log(loadedBook);
            handleChange(event, 2);
        };
        fetchBookById().catch((error: any) => {
            console.log(error.message);
        });
    };
    const handleTrigger = () => {
        setTrigger(!trigger);
    };

    const handleDeleteBook = (bookId: number) => {
        setIsLoadingBooks(true);
        const fetchDeleteBook = async () => {
            const baseUrl: string = `http://localhost:8000/books/${bookId}`;

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
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
            setIsLoadingBooks(false);
            handleClick(1, 'Xóa sách thành công');
        };
        fetchDeleteBook().catch((error) => {
            setIsLoadingBooks(false);
            handleClick(0, 'Xóa sách không thành công');
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    /**
     * Lấy dữ liệu sách
     */
    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = `http://localhost:8000/books/getAllBooks`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const responseDataBooks = responseJson.result;
            const loadedBooks: BookModel[] = [];
            for (const key in responseDataBooks) {
                loadedBooks.push({
                    id: responseDataBooks[key].id,
                    name: responseDataBooks[key].name,
                    author: {
                        id: responseDataBooks[key].author?.id,
                        name: responseDataBooks[key].author?.name,
                    },
                    publisher: {
                        id: responseDataBooks[key].publisher?.id,
                        name: responseDataBooks[key].publisher?.name,
                    },
                    category: {
                        id: responseDataBooks[key].category?.id,
                        name: responseDataBooks[key].category?.name,
                    },
                    coupon_codes: {
                        coupon_code_id: responseDataBooks[key].couponCodes?.couponCodeId,
                        coupon_code_count: responseDataBooks[key].couponCodes?.couponCodeCount,
                        coupon_code_sale_price: responseDataBooks[key].couponCodes?.couponCodeSalePrice,
                    },
                    created_at: responseDataBooks[key].createdAt,
                    updated_at: responseDataBooks[key].updatedAt,
                    description: responseDataBooks[key].description,
                    inventory_number: responseDataBooks[key].inventoryNumber,
                    language: responseDataBooks[key].language,
                    page_number: responseDataBooks[key].pageNumber,
                    price: responseDataBooks[key].pageNumber,
                    publishing_year: responseDataBooks[key].publishingYear,
                    ratings_star: responseDataBooks[key].ratingsStar,
                    size: responseDataBooks[key].size,
                    weight: responseDataBooks[key].weight,
                    status: responseDataBooks[key].status,
                });
            }
            setBooks(loadedBooks);
            setIsLoadingBooks(false);
        };
        fetchBooks().catch((error) => {
            console.log(error.message);
            setIsLoadingBooks(false);
        });
    }, [trigger]);

    /**
     * Sử lý yêu cầu xóa sách
     */

    //
    const [open, setOpen] = React.useState(false);

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

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Bảng sách" {...a11yProps(0)} />
                    <Tab label="Thêm sách mới" {...a11yProps(1)} />
                    <Tab label="Sửa thông tin sách" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {/* Nội dung khác của bạn đặt ở đây */}
                {isLoadingBooks && (
                    <Box
                        sx={{
                            textAlign: 'center',
                        }}
                    >
                        <CircularProgress color="secondary" />
                        <CircularProgress color="success" />
                        <CircularProgress color="inherit" />
                    </Box>
                )}
                {!isLoadingBooks && books && (
                    <BookTable
                        handleDeleteBook={handleDeleteBook}
                        books={books}
                        handleBookEditById={handleBookEditById}
                    />
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <BookFormAdd handleClick={handleClick} handleTrigger={handleTrigger} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <BookFormAdd handleClick={handleClick} handleTrigger={handleTrigger} book={book} />
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
}
