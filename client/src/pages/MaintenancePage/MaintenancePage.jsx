import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import { useRooms } from 'contexts/RoomsContext';
import { Strut } from 'components/Layout';
import RoomStateCard from './components/RoomStateCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 15px 0;
    align-self: center;
    margin-top: 30px;
`;

const GridContainer = styled.div`
    max-width: 100%;
    height: 100%;
    border-radius: 30px;
    // Add fade-in animation to allow Floor Plan view to center
    opacity: 0;
    animation: fadeIn 500ms ease-in-out 100ms forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 35px;
    padding: 25px;
    align-self: center;
    box-sizing: border-box;
    border-radius: 12px;
`;

const Title = styled.h1`
    margin: 0 25px;
    font-weight: 400;
    color: ${Colors.darkBlue};
    font-family: ${Fonts.titleFont};
`;

const Error = styled.h2`
    align-self: center;
    margin: 0 25px;
    color: ${Colors.red};
    font-family: ${Fonts.titleFont};
`;

const MaintenancePage = () => {
    const { rooms } = useRooms();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (rooms.length === 0) {
            setError('No devices found. Try again.');
            return;
        }
        setError(null);
    }, [rooms.length]);

    return (
        <Container>
            <Title>Device Maintenance</Title>
            <Strut vertical size={25} />
            {error ? (
                <Error>{error}</Error>
            ) : (
                <GridContainer>
                    <Grid>
                        {rooms.map((room) => (
                            <RoomStateCard
                                key={room.roomId}
                                roomId={room.roomId}
                                name={room.name}
                                devices={room.devices}
                            />
                        ))}
                    </Grid>
                </GridContainer>
            )}
        </Container>
    );
};

export default MaintenancePage;
