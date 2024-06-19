import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BookModel from '../models/BookModel';
import { BookRemoveDialog } from '../pages/bookManagement/BookRemoveDialog';
import { Link, useNavigate } from 'react-router-dom';

export const StickyHeadTable: React.FC<{ books: BookModel[]; handleRemoveBook: any; openEditForm?: any }> = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    interface Column {
        id:
            | 'id'
            | 'name'
            | 'publishing_year'
            | 'description'
            | 'price'
            | 'inventory_number'
            | 'page_number'
            | 'status'
            | 'language'
            | 'author'
            | 'category'
            | 'publisher'
            | 'created_at'
            | 'updated_at'
            | 'weight'
            | 'ratings_star'
            | 'size'
            | 'images'
            | 'coupon_codes'
            | 'actions';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: readonly Column[] = [
        { id: 'id', label: 'ID', minWidth: 50 },
        { id: 'name', label: 'Tên', minWidth: 100 },
        { id: 'publishing_year', label: 'Năm phát hành', minWidth: 50 },
        { id: 'inventory_number', label: 'Số lượng', minWidth: 50 },
        { id: 'page_number', label: 'Số trang', minWidth: 50 },
        { id: 'status', label: 'Trạng thái', minWidth: 50 },
        { id: 'language', label: 'Ngôn ngữ', minWidth: 70 },
        { id: 'author', label: 'Tác giả', minWidth: 100 },
        { id: 'category', label: 'Danh mục', minWidth: 100 },
        { id: 'publisher', label: 'Nhà XB', minWidth: 100 },
        { id: 'ratings_star', label: 'Đánh giá', minWidth: 50 },
        { id: 'images', label: 'Ảnh', minWidth: 100 },
        { id: 'coupon_codes', label: 'Giảm giá', minWidth: 50 },
        { id: 'actions', label: 'Hành động', minWidth: 80 },
    ];

    interface Data {
        id: number;
        name: string;
        publishing_year?: number;
        price?: number;
        inventory_number?: number;
        page_number?: number;
        status?: string;
        language?: string;
        author?: string;
        category?: string;
        publisher?: string;
        ratings_star?: number;
        images?: any;
        coupon_codes?: number;
    }
    const rows: Data[] = props.books.map((book) => ({
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
        images: book.images,
        coupon_codes: book.coupon_codes?.coupon_code_sale_price,
    }));

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600, maxWidth: '100%' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column, index) => {
                                        if (column.id === 'actions') {
                                            return (
                                                <TableCell key={column.id} style={{ display: 'flex' }}>
                                                    <Link to={`/books/${row.id}`}>
                                                        <Button>
                                                            <EditOutlinedIcon />
                                                        </Button>
                                                    </Link>

                                                    <BookRemoveDialog
                                                        handleRemoveBook={props.handleRemoveBook}
                                                        bookId={row.id}
                                                        bookName={row.name}
                                                        key={row.id}
                                                    >
                                                        <DeleteOutlineOutlinedIcon style={{ color: 'red' }} />
                                                    </BookRemoveDialog>
                                                </TableCell>
                                            );
                                        } else {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        }
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
