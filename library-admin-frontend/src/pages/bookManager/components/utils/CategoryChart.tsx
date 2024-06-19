import * as React from 'react';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';
import CategoryModel from '../../../../models/CategoryModel';

export const CategoryChart: React.FC<{ categories: CategoryModel[] }> = (props) => {
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

    props.categories.map((category) => {
        data.push({
            team: category.name,
            rank: category.id,
            points: category.total_book,
        });
    });
    return (
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
    );
};
