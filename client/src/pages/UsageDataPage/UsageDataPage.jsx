import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import LineChart from 'components/LineChart';
import Table from 'components/Table';
import { Strut } from 'components/Layout';
import useRequest from 'hooks/useRequest';
import URLS from 'constants/urls';
import Debug from 'util/debug';
import moment from 'moment';

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

const Subtitle = styled.h3`
    align-self: flex-start;
    margin: 0 12%;
    margin-top: 30px;
    font-weight: 400;
    color: ${Colors.darkBlue};
    font-family: ${Fonts.titleFont};
`;

const UsageDataPage = () => {
    const request = useRequest();
    const [electricity, setElectricity] = useState([]);
    const [water, setWater] = useState([]);

    useEffect(() => {
        const run = async () => {
            try {
                const respElectricity = await request.get(URLS.electricity);
                const respWater = await request.get(URLS.water);
                setElectricity(respElectricity);
                setWater(respWater);
            } catch (errMessage) {
                Debug.log(errMessage);
            }
        };
        run();
    }, []);

    const getGroupedData = (data) => {
        const grouped = [];
        data.reduce((res, value) => {
            if (!res[value.date]) {
                res[value.date] = { date: value.date, cost: 0, usage: 0 };
                grouped.push(res[value.date]);
            }
            res[value.date].cost += value.cost;
            res[value.date].usage += value.usage;
            return res;
        }, {});
        return grouped;
    };

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

    const getFormattedData = (data) => {
        const groupedData = getGroupedData(data);
        return groupedData.map((obj) => {
            const date = moment(obj.date, 'ddd, DD MMM YYYY');
            const formattedDate = date.format('MMM D, YYYY');
            const day = date.format('D');
            const month = date.format('MMM');
            const year = date.format('YYYY');
            return { ...obj, formattedDate, day, month, year };
        });
    };

    const toMonthDay = (value) => moment(value, 'MMM D, YYYY').format('MMM D');

    const toUSD = (value) =>
        value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

    const formattedElectricity = useMemo(() => getFormattedData(electricity), [electricity]);
    const formattedWater = useMemo(() => getFormattedData(water), [water]);
    const combinedElectricityWater = useMemo(() => {
        const newElectricity = formattedElectricity.map((obj) => ({
            formattedDate: obj.formattedDate,
            electricityUsage: obj.usage,
            electricityCost: obj.cost,
            formattedElectricityUsage: obj.usage.toLocaleString(),
            formattedElectricityCost: toUSD(obj.cost),
        }));
        const newWater = formattedWater.map((obj) => ({
            formattedDate: obj.formattedDate,
            waterUsage: obj.usage,
            waterCost: obj.cost,
            formattedWaterUsage: obj.usage.toLocaleString(),
            formattedWaterCost: toUSD(obj.cost),
        }));
        return getCombinedData([newElectricity, newWater]);
    }, [electricity, water]);

    const getDateRange = () => {
        const combined = combinedElectricityWater;
        if (!combined || combined.length === 0) {
            return '';
        }
        return `${toMonthDay(combined[0].formattedDate)} - ${
            combined[combined.length - 1].formattedDate
        }`;
    };

    const getTotalCost = () => {
        let totalCost = 0;
        combinedElectricityWater.forEach((obj) => {
            totalCost += obj.electricityCost + obj.waterCost;
        });
        return totalCost;
    };

    return (
        <Container>
            <Title>Usage Data</Title>
            <Subtitle>Range: {getDateRange()}</Subtitle>
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
                    data={formattedElectricity}
                    xDataKey="formattedDate"
                    xLabel="Date"
                    xTickFormatter={toMonthDay}
                    yDataKey="usage"
                    yLabel="Wattage (watts)"
                    tooltipFormatter={(value) => `${value.toLocaleString()} watts`}
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
                    data={formattedWater}
                    xDataKey="formattedDate"
                    xLabel="Date"
                    xTickFormatter={toMonthDay}
                    yDataKey="usage"
                    yLabel="Volume (cubic meters)"
                    tooltipFormatter={(value) => `${value.toLocaleString()} cubic meters`}
                />
            </HorizontalContainer>
            <Strut vertical size={50} />
            <Table
                title="Total Usage"
                titleColor={Colors.white}
                titleBackgroundColor={Colors.darkerBlue}
                columnColor={Colors.white}
                columnBackgroundColor={Colors.darkBlue}
                cellColor={Colors.offBlack}
                cellBackgroundColor={Colors.offWhite}
                width={1100}
                data={combinedElectricityWater}
                columns={[
                    { Header: 'Date', accessor: 'formattedDate' },
                    { Header: 'Electricity Wattage', accessor: 'formattedElectricityUsage' },
                    { Header: 'Electricity Cost', accessor: 'formattedElectricityCost' },
                    { Header: 'Water Volume', accessor: 'formattedWaterUsage' },
                    { Header: 'Water Cost', accessor: 'formattedWaterCost' },
                ]}
            />
            <Table
                titleColor={Colors.white}
                titleBackgroundColor={Colors.darkerBlue}
                columnColor={Colors.white}
                columnBackgroundColor={Colors.darkBlue}
                cellColor={Colors.offBlack}
                cellBackgroundColor={Colors.offWhite}
                width={1100}
                data={[{ totalCost: toUSD(getTotalCost()) }]}
                columns={[{ Header: 'Total Cost', accessor: 'totalCost' }]}
            />
        </Container>
    );
};

export default UsageDataPage;
