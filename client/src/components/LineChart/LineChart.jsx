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
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
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
        xTickFormatter,
        yLabel,
        yUnit,
        yTickFormatter,
        margin,
        lineStroke,
        shadow,
        lineStrokeWidth,
        gridStroke,
        gridStrokeDasharray,
        tooltipFormatter,
    } = props;

    const getCalculatedMargin = () => {
        if (!margin) {
            return { bottom: xLabel ? 20 : 0, left: yLabel ? 20 : 0 };
        }
        return {
            ...margin,
            ...(xLabel ? { bottom: margin.bottom ?? 20 } : {}),
            ...(yLabel ? { left: margin.left ?? 10 } : {}),
        };
    };

    return (
        <Container
            style={
                tableBackgroundColor
                    ? {
                          backgroundColor: tableBackgroundColor,
                          padding: 20,
                          borderRadius: 25,
                          boxShadow: shadow,
                      }
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
                    tickFormatter={xTickFormatter}
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
                    tickFormatter={yTickFormatter}
                />
                <Tooltip itemStyle={{ color: Colors.black }} formatter={tooltipFormatter} />
            </Chart>
        </Container>
    );
};

export default LineChart;
