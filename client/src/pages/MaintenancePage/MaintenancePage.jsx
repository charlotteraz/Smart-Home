import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import { Strut } from 'components/Layout';
import { ROOMS } from 'constants/mock';
import RoomStateCard from './components/RoomStateCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 0;
`;

const GridContainer = styled.div`
    padding: 0 25px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    padding: 25px;
    align-self: center;
    box-sizing: border-box;
    background-color: ${Colors.white};
    border: 3px solid ${Colors.offBlack};
    border-radius: 12px;
`;

const Title = styled.h1`
    margin: 0 25px;
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
