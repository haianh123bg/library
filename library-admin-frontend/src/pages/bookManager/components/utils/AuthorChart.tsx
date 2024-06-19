import * as React from 'react';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';
import AuthorModel from '../../../../models/AuthorModel';
import { Box, Typography } from '@mui/material';

export const AuthorChart: React.FC<{ authors: AuthorModel[] }> = (props) => {
    const otherProps: Partial<PieChartProps> = {
        width: 800,
        height: 400,
        sx: {
            [`.${legendClasses.root}`]: {
                transform: 'translate(20px, 0)',
            },
        },
    };

    const data: any = [];

    props.authors.map((author) => {
        data.push({
            team: author.name,
            rank: author.id,
            points: author.total_book,
        });
    });
    return (
        <Box>
            <PieChart
                series={[
                    {
                        data: data.map((d: any) => ({ label: d.team, id: d.team, value: d.points })),
                        valueFormatter: (v, { dataIndex }) => {
                            const { rank } = data[dataIndex];
                            return `có ${v.value} quyển sách.`;
                        },
                    },
                ]}
                {...otherProps}
            />
            <Typography variant="h6" sx={{ margin: '0', textAlign: 'center', marginTop: '1rem' }}>
                Biểu đồ thống kê số lượng sách theo tác giả
            </Typography>
        </Box>
    );
};
