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
import { Button, Tooltip, Typography } from '@mui/material';
import BorrowingFormModel from '../../../../models/BorrowingFormModel';

export const BorrowTable: React.FC<{ borrows: BorrowingFormModel[] }> = (props) => {
    const initialRows: GridRowsProp = props.borrows.map((borrow) => ({
        id: borrow.id,
        user: borrow.user?.user_account_name,
        book: borrow.book?.name,
        due_date: borrow.due_date,
    }));

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
            field: 'user',
            headerName: 'Người mượn',
            type: 'string',
            width: 180,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'book',
            headerName: 'Tên sách',
            type: 'string',
            width: 250,
        },
        {
            field: 'due_date',
            headerName: 'Ngày hẹn trả',
            width: 120,
            type: 'string',
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
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
                            <Tooltip title="Chi tiết phiếu mượn" arrow>
                                <BallotOutlinedIcon />
                            </Tooltip>
                        }
                        label="Edit"
                        className="textPrimary"
                        color="inherit"
                    />,

                    <GridActionsCellItem
                        icon={
                            <Tooltip title="Trả sách" arrow>
                                <AssignmentTurnedInOutlinedIcon />
                            </Tooltip>
                        }
                        label="Delete"
                        color="inherit"
                    />,
                ];
            },
        },
    ];

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
                    Bảng Phiếu Mượn
                </Typography>

                <Button variant="contained" color="success">
                    <span style={{ color: 'white' }}>Thêm phiếu mượn</span> <AddOutlinedIcon sx={{ color: 'white' }} />
                </Button>
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
        </Box>
    );
};
