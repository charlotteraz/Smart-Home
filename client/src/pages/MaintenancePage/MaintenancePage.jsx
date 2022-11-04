import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import { Strut } from 'components/Layout';
import { ROOMS } from 'constants/mock';
import RoomStateCard from './components/RoomStateCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-self: center;
    margin-top: 40px;
`;

const GridContainer = styled.div`
    background-color: ${Colors.darkBlue};
    width: 100%;
    border-radius: 10px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 25px;
    padding: 25px;
    align-self: center;
    box-sizing: border-box;
    background-color: ${Colors.darkBlue};
    border-radius: 12px;
`;

const Title = styled.h1`
    font-family: ${Fonts.titleFont};
    text-align: center;
    font-weight: 400;
    font-size: 40px;
    color: ${Colors.darkBlue};
`;

const MaintenancePage = () => (
    <Container>
        <Title>Device Maintenance</Title>
        <Strut vertical size={25} />
        <GridContainer>
            <Grid>
                {ROOMS.map((room) => (
                    <RoomStateCard
                        key={room.roomId}
                        roomId={room.roomId}
                        name={room.name}
                        devices={room.devices}
                    />
                ))}
            </Grid>
        </GridContainer>
    </Container>
);

export default MaintenancePage;
