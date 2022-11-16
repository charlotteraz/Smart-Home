import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import LineChart from 'components/LineChart';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 15px 0;
`;

const Title = styled.h1`
    margin: 0 25px;
    color: ${Colors.darkBlue};
    font-family: ${Fonts.titleFont};
`;

const UsageDataPage = () => (
    <Container>
        <Title>Usage Data</Title>
        <LineChart />
    </Container>
);

export default UsageDataPage;
