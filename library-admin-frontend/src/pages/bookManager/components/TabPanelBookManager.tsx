import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabBook from './tabchildren/TabBook';
import { TabCategory } from './tabchildren/TabCategory';
import { TabAuthor } from './tabchildren/TabAuthor';
import { TabPublisher } from './tabchildren/TabPublisher';

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

export default function TabPanelBookManager() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Quản lý tác giả" {...a11yProps(0)} />
                    <Tab label="Quản lý danh mục" {...a11yProps(1)} />
                    <Tab label="Quản lý sách" {...a11yProps(2)} />
                    <Tab label="Quản lý nhà xuất bản" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TabAuthor />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TabCategory />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <TabBook />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
                <TabPublisher />
            </CustomTabPanel>
        </Box>
    );
}
