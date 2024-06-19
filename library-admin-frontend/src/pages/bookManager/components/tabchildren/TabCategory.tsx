import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CategoryTable } from '../utils/CategoryTable';
import CategoryModel from '../../../../models/CategoryModel';
import { Button, CircularProgress, IconButton, Snackbar } from '@mui/material';
import { CategoryChart } from '../utils/CategoryChart';
import { GridCloseIcon } from '@mui/x-data-grid';
import { CategoryFormAdd } from '../utils/CategoryFormAdd';

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

export const TabCategory = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    /**
     *
     */
    const [categories, setCategories] = React.useState<CategoryModel[]>([]);
    const [isLoadingCategories, setIsLoadingCategories] = React.useState(true);
    const [trigger, setTrigger] = React.useState(false);

    const handleTrigger = () => {
        setTrigger(!trigger);
    };
    const [category, setCategory] = React.useState<CategoryModel>();

    React.useEffect(() => {
        const fetchCategories = async () => {
            const baseUrl: string = `http://localhost:8000/categories`;
            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
                setIsLoadingCategories(false);
            }

            const responseJson = await response.json();
            const responseData = responseJson.result;
            const loadedCategories: CategoryModel[] = [];
            for (const key in responseData) {
                loadedCategories.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    total_book: responseData[key].totalBooks,
                });
            }

            setCategories(loadedCategories);
            setIsLoadingCategories(false);
        };
        fetchCategories().catch((error) => {
            console.log(error.message);
            setIsLoadingCategories(false);
        });
    }, [trigger]);

    /**
     * Sử lý yêu cầu xóa danh mục
     */
    const handleDeleteCategories = (categoryId: number) => {
        setIsLoadingCategories(true);
        const fetchDeleteCategory = async () => {
            const baseUrl: string = `http://localhost:8000/categories/${categoryId}`;

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
            setCategories((prevCategories) => prevCategories.filter((category) => category.id !== categoryId));
            setIsLoadingCategories(false);
            handleClick(1, 'Xóa danh mục thành công');
        };
        fetchDeleteCategory().catch((error) => {
            setIsLoadingCategories(false);
            handleClick(0, 'Xóa danh mục không thành công');
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    /**
     * Sử lý yêu cầu thêm danh mục
     */
    const handleAddCategory = (name: string) => {
        const fetchAddCategory = async () => {
            const baseUrl: string = `http://localhost:8000/categories`;
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name }),
            });
            if (!response) {
                console.log('Something went wrong!');
            }
            handleClick(1, 'Thêm danh mục thành công');
            handleTrigger();
        };
        fetchAddCategory().catch((error: any) => {
            handleClick(0, 'Thêm danh mục thất bại');
        });
    };

    const handleEditCategory = (id: number, name: string) => {
        const fetchEditCategory = async () => {
            const baseUrl: string = `http://localhost:8000/categories/${id}`;

            const response = await fetch(baseUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name }),
            });
            if (!response) {
                console.log('Something went wrong!');
            }
            handleClick(1, 'Sửa danh mục thành công');
            handleTrigger();
        };
        fetchEditCategory().catch((error) => {
            console.log(error);
            handleClick(0, 'Sửa danh mục thất bại');
        });
    };
    /**
     * Mở form sửa danh mục
     */
    const openCategoryEdit = (event: React.SyntheticEvent, id: number, name: string) => {
        setCategory(() => ({ id: id, name: name }));
        console.log(id);
        console.log(name);

        handleChange(event, 2);
    };
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
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Bảng danh mục" {...a11yProps(0)} />
                    <Tab label="Thêm danh mục" {...a11yProps(1)} />
                    <Tab label="Sửa danh mục" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box sx={{ display: 'flex' }}>
                    {isLoadingCategories && (
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
                    {!isLoadingCategories && categories && (
                        <Box sx={{ width: '35%' }}>
                            <CategoryTable
                                openCategoryEdit={openCategoryEdit}
                                categories={categories}
                                handleDeleteCategories={handleDeleteCategories}
                            />
                        </Box>
                    )}
                    {isLoadingCategories && (
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
                    {!isLoadingCategories && categories && (
                        <Box sx={{ width: '50%' }}>
                            <CategoryChart
                                categories={categories.filter((category) => {
                                    return category.total_book !== undefined && category.total_book > 0;
                                })}
                            />
                        </Box>
                    )}
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <CategoryFormAdd handleAddCategory={handleAddCategory} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <CategoryFormAdd category={category} handleEditCategory={handleEditCategory} />
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
