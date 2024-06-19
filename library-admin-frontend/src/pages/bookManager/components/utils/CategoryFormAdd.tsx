import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CategoryModel from '../../../../models/CategoryModel';

export const CategoryFormAdd: React.FC<{
    handleAddCategory?: any;
    category?: CategoryModel;
    handleEditCategory?: any;
}> = (props) => {
    const [categoryName, setCategoryName] = useState(props.category?.name ?? '');
    console.log(props.category?.name);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
                display: 'flex',
                flexDirection: 'column', // Xếp theo chiều dọc
                justifyContent: 'center',
                alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Tên danh mục"
                variant="outlined"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => {
                    props.category?.id
                        ? props.handleEditCategory(props.category?.id, categoryName)
                        : props.handleAddCategory(categoryName);
                    !props.category?.id ? setCategoryName('') : '';
                }}
            >
                Submit
            </Button>
        </Box>
    );
};
