import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import LineChart from 'components/LineChart';
import Table from 'components/Table';
import { ELECTRICITY_USAGE_DATA, WATER_USAGE_DATA } from 'constants/mock';
import { Strut } from 'components/Layout';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 0 40px 0;
    align-items: center;
    justify-content: center;
`;

const HorizontalContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: -20px;
`;

const Title = styled.h1`
    align-self: flex-start;
    margin: 0 12%;
    margin-top: 30px;
    font-weight: 400;
    color: ${Colors.darkBlue};
    font-family: ${Fonts.titleFont};
`;

const UsageDataPage = () => {
    const getShorthandMonths = (data) =>
        data.map((obj) => {
            const shorthandMonth = obj.month.slice(0, 3);
            return { ...obj, month: shorthandMonth };
        });

    const getCombinedData = (dataList) => {
        if (!dataList) {
            return [];
        }
        const baseLength = dataList[0].length;
        let combinedData = Array(baseLength).fill({});
        dataList.forEach((data) => {
            if (!combinedData || data.length !== baseLength) {
                combinedData = null;
                return;
            }
            data.forEach((obj, index) => {
                combinedData[index] = { ...combinedData[index], ...obj };
            });
        });
        return combinedData ?? {};
    };

    return (
        <Container>
            <Title>Usage Data</Title>
            <Strut vertical size={50} />
            <HorizontalContainer>
                <LineChart
                    title="Electricity"
                    titleColor={Colors.white}
                    tableBackgroundColor={Colors.darkerBlue}
                    tableColor={Colors.white}
                    lineStroke={Colors.white}
                    gridStroke={Colors.white}
                    width={500}
                    height={420}
                    margin={{ right: 10 }}
                    data={getShorthandMonths(ELECTRICITY_USAGE_DATA)}
                    xDataKey="month"
                    xLabel="Month"
                    yDataKey="wattage"
                    yLabel="Wattage"
                />
                <LineChart
                    title="Water"
                    titleColor={Colors.white}
                    tableBackgroundColor={Colors.darkBlue}
                    tableColor={Colors.white}
                    lineStroke={Colors.white}
                    gridStroke={Colors.white}
                    width={500}
                    height={420}
                    margin={{ right: 10 }}
                    data={getShorthandMonths(WATER_USAGE_DATA)}
                    xDataKey="month"
                    xLabel="Month"
                    yDataKey="volume"
                    yLabel="Volume"
                />
            </HorizontalContainer>
            <Strut vertical size={50} />
            <Table
                title="Electricity"
                titleColor={Colors.white}
                titleBackgroundColor={Colors.darkerBlue}
                columnColor={Colors.white}
                columnBackgroundColor={Colors.darkBlue}
                cellColor={Colors.offBlack}
                cellBackgroundColor={Colors.offWhite}
                width={1100}
                data={getCombinedData([ELECTRICITY_USAGE_DATA, WATER_USAGE_DATA])}
                columns={[
                    { Header: 'Month', accessor: 'month' },
                    { Header: 'Wattage', accessor: 'wattage' },
                    { Header: 'Volume', accessor: 'volume' },
                ]}
            />
        </Container>
    );
};

export default UsageDataPage;
