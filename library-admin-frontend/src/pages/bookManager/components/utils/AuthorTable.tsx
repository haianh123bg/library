import * as React from 'react';
import Box from '@mui/material/Box';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import {
    GridRowsProp,
    GridRowModesModel,
    DataGrid,
    GridColDef,
    GridActionsCellItem,
    GridEventListener,
    GridRowModel,
    GridRowEditStopReasons,
    GridRowModes,
} from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tooltip,
    Typography,
} from '@mui/material';
import AuthorModel from '../../../../models/AuthorModel';

export const AuthorTable: React.FC<{ authors: AuthorModel[]; handleDeleteAuthors: any }> = (props) => {
    const initialRows: GridRowsProp = props.authors.map((author) => ({
        id: author.id,
        name: author.name,
        image: author.image,
        total_book: author.total_book,
    }));
    console.log(initialRows);

    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 30 },
        {
            field: 'name',
            headerName: 'Tên tác giả',
            type: 'string',
            width: 180,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'image',
            headerName: 'Ảnh',
            type: 'string',
            width: 250,
        },
        {
            field: 'total_book',
            headerName: 'Số đầu sách',
            width: 100,
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
                            icon={<EditIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                        />,
                        <GridActionsCellItem
                            icon={<EditIcon />}
                            label="Cancel"
                            className="textPrimary"
                            color="inherit"
                        />,
                    ];
                }
                return [
                    <GridActionsCellItem
                        icon={
                            <Tooltip title="Sửa thông tinx" arrow>
                                <EditIcon />
                            </Tooltip>
                        }
                        label="Sửa thông tin"
                        className="textPrimary"
                        color="inherit"
                        onClick={(event: React.SyntheticEvent) => {}}
                    />,

                    <GridActionsCellItem
                        icon={
                            <Tooltip title="Xóa tác giả" arrow>
                                <DeleteIcon />
                            </Tooltip>
                        }
                        label="Delete"
                        color="inherit"
                        onClick={() => handleClickOpen(row.id, row.name)}
                    />,
                ];
            },
        },
    ];

    const [open, setOpen] = React.useState(false);
    const [authorId, setAuthorId] = React.useState(0);
    const [authorName, setAuthorName] = React.useState('');
    const handleClickOpen = (authorId: number, authorName: string) => {
        setOpen(true);
        setAuthorId(authorId);
        setAuthorName(authorName);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                height: 500,
                width: '48%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <Box sx={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
                <Typography variant="h5" sx={{ margin: '0' }}>
                    Bảng Tác Giả
                </Typography>
            </Box>

            <DataGrid
                rows={rows}
                columns={columns}
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
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
                    <DialogTitle id="alert-dialog-title">{'Bạn có thật sự muốn tác giả?'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Bạn có muốn xóa tác giả: {authorName} có mã là: {authorId}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Hủy bỏ</Button>
                        <Button
                            onClick={async () => {
                                await handleClose();
                                props.handleDeleteAuthors(authorId);
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
