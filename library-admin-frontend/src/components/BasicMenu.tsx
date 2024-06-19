import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface InfoMenu {
    title: string;
    link: string;
}
export const BasicMenu: React.FC<{ children: any; listMenu: InfoMenu[]; handleOpenMenuBookAdd?: any }> = (props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ margin: 'auto 0' }}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.children}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {props.listMenu.map((infoMenu, index) => (
                    <MenuItem onClick={() => props.handleOpenMenuBookAdd(infoMenu.link)} key={index}>
                        {infoMenu.title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
