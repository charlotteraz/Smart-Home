import React from 'react';
import { LineChart as Chart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Colors from 'constants/colors';
import styled from 'styled-components';
import { Strut } from 'components/Layout';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`;

const Title = styled.h2``;

const LineChart = (props) => {
    const {
        title,
        titleColor,
        tableColor,
        tableBackgroundColor,
        width,
        height,
        data,
        xDataKey,
        xLabel,
        yDataKey,
        yLabel,
        yUnit,
        margin,
        lineStroke,
        lineStrokeWidth,
        gridStroke,
        gridStrokeDasharray,
    } = props;

    const getCalculatedMargin = () => {
        if (!margin) {
            return { bottom: xLabel ? 20 : 0, left: yLabel ? 20 : 0 };
        }
        return {
            ...margin,
            ...(xLabel ? { bottom: margin.bottom ?? 20 } : {}),
            ...(yLabel ? { left: margin.left ?? 20 } : {}),
        };
    };

    return (
        <Container
            style={
                tableBackgroundColor
                    ? { backgroundColor: tableBackgroundColor, padding: 20, borderRadius: 25 }
                    : {}
            }
        >
            {title && (
                <>
                    <Title style={{ color: titleColor ?? Colors.offBlack }}>{title}</Title>
                    <Strut vertical size={25} />
                </>
            )}
            <Chart width={width} height={height} data={data} margin={getCalculatedMargin()}>
                <Line
                    type="monotone"
                    dataKey={yDataKey}
                    stroke={lineStroke ?? Colors.offBlack}
                    strokeWidth={lineStrokeWidth ?? 1}
                />
                <CartesianGrid
                    vertical={false}
                    stroke={gridStroke ?? Colors.offBlack}
                    strokeDasharray={gridStrokeDasharray ?? '2 4'}
                />
                <XAxis
                    dataKey={xDataKey}
                    stroke={tableColor ?? Colors.offBlack}
                    label={
                        xLabel
                            ? {
                                  value: xLabel,
                                  position: 'bottom',
                                  fill: tableColor ?? Colors.offBlack,
                              }
                            : {}
                    }
                />
                <YAxis
                    stroke={tableColor ?? Colors.offBlack}
                    unit={yUnit}
                    label={
                        yLabel
                            ? {
                                  value: yLabel,
                                  angle: -90,
                                  position: 'left',
                                  fill: tableColor ?? Colors.offBlack,
                              }
                            : {}
                    }
                />
                <Tooltip itemStyle={{ color: Colors.black }} />
            </Chart>
        </Container>
    );
};

export default LineChart;
