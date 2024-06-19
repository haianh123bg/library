import React, { useState } from 'react';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridActionsCellItem,
    GridRowModel,
} from '@mui/x-data-grid';
import BookModel from '../../../../models/BookModel';
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';

export const BookTable: React.FC<{ books: BookModel[]; handleDeleteBook: any; handleBookEditById: any }> = (props) => {
    const initialRows: GridRowsProp = props.books.map((book) => ({
        id: book.id,
        name: book.name,
        publishing_year: book.publishing_year,
        price: book.price,
        inventory_number: book.inventory_number,
        page_number: book.page_number,
        status: book.status,
        language: book.language,
        author: book.author?.name,
        category: book.category?.name,
        publisher: book.publisher?.name,
        ratings_star: book.ratings_star,
        images: '',
        coupon_codes: book.coupon_codes?.coupon_code_sale_price,
    }));
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const [open, setOpen] = useState(false);
    const [bookId, setBookId] = useState(0);
    const [bookName, setBookName] = useState('');
    const handleClickOpen = (bookId: number, bookName: string) => {
        setOpen(true);
        setBookId(bookId);
        setBookName(bookName);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'name',
            headerName: 'Tên sách',
            type: 'string',
            width: 100,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'publishing_year',
            headerName: 'Năm xuất bản',
            type: 'string',
            width: 60,
        },
        {
            field: 'price',
            headerName: 'Giá(VND)',
            width: 100,
            type: 'number',
        },
        {
            field: 'inventory_number',
            headerName: 'Số lượng rảnh',
            type: 'number',
            width: 50,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'page_number',
            headerName: 'Số trang',
            type: 'number',
            width: 60,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            width: 100,
            type: 'string',
        },
        {
            field: 'language',
            headerName: 'Ngôn ngữ',
            type: 'string',
            width: 100,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'author',
            headerName: 'Tác giả',
            type: 'string',
            width: 180,
        },
        {
            field: 'category',
            headerName: 'Danh mục',
            width: 180,
            type: 'string',
        },
        {
            field: 'publisher',
            headerName: 'NXB',
            width: 180,
            type: 'string',
        },
        {
            field: 'ratings_star',
            headerName: 'Đánh giá',
            type: 'number',
            width: 80,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'images',
            headerName: 'Ảnh',
            type: 'string',
            width: 100,
        },
        {
            field: 'coupon_codes',
            headerName: 'Giảm giá',
            width: 50,
            type: 'number',
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id, row }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        color="inherit"
                        onClick={(event: React.SyntheticEvent) => {
                            props.handleBookEditById(event, row.id);
                        }}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        color="inherit"
                        onClick={() => handleClickOpen(row.id, row.name)}
                    />,
                ];
            },
        },
    ];

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <Autocomplete
                options={[]}
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300, marginBottom: '0.5rem' }}
                renderInput={(params) => <TextField {...params} label="Search" />}
            />
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                processRowUpdate={processRowUpdate}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{'Bạn có thật sự muốn xóa sách?'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Bạn có muốn xóa sách: {bookName} có mã là: {bookId}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Hủy bỏ</Button>
                        <Button
                            onClick={async () => {
                                await handleClose();
                                props.handleDeleteBook(bookId, bookName);
                            }}
                            autoFocus
                        >
                            Xác nhận xóa
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </Box>
    );
};
