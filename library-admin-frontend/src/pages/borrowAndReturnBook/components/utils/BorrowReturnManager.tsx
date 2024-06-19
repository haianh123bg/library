import React from 'react';
import { BorrowTable } from './BorrowTable';
import { Box, CircularProgress } from '@mui/material';
import { ReturnTable } from './ReturnTable';
import BorrowingFormModel from '../../../../models/BorrowingFormModel';

export const BorrowReturnManager = () => {
    const [borrows, setBorrows] = React.useState<BorrowingFormModel[]>([]);
    const [isLoadingBorrows, setIsLoadingBorrows] = React.useState(true);
    const [errorBorrows, setErrorBorrows] = React.useState(null);

    React.useEffect(() => {
        const fetchBorrows = async () => {
            const baseUrl: string = `http://localhost:8000/borrows`;

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();
            const responseData = responseJson.result;

            const loadedBorrows: BorrowingFormModel[] = [];
            for (const key in responseData) {
                loadedBorrows.push({
                    id: responseData[key].borrowingFormId,
                    date: responseData[key].borrowingFormDate,
                    type: responseData[key].borrowingFormType,
                    deposit: responseData[key].borrowingFormDeposit,
                    due_date: responseData[key].borrowingFormDueDate,
                    user: {
                        user_name: responseData[key].user?.userName,
                        user_account_name: responseData[key].user?.userAccountName,
                    },
                    book: {
                        id: responseData[key].book?.id,
                        name: responseData[key].book?.name,
                    },
                });
            }

            setBorrows(loadedBorrows);
            console.log(loadedBorrows);

            setIsLoadingBorrows(false);
        };
        fetchBorrows().catch((error) => {
            console.log(error);
            setIsLoadingBorrows(false);
        });
    }, []);
    return (
        <Box>
            <Box sx={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                {isLoadingBorrows ? (
                    <Box sx={{ width: '48%' }}>
                        <CircularProgress disableShrink />
                    </Box>
                ) : (
                    <BorrowTable borrows={borrows} />
                )}
                <ReturnTable />
            </Box>
        </Box>
    );
};
