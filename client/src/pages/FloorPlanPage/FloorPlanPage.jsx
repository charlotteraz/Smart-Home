import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import { Strut } from 'components/Layout';
import { useRooms } from 'contexts/RoomsContext';
import { clamp } from 'util/math';
import Room from './components/Room';
import Control from './components/Control';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 15px 0;
    align-self: center;
    margin-top: 30px;
`;

const FloorPlanContainer = styled.div`
    position: relative;
    max-width: 100%;
    height: 85%;
    margin: 0 15px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
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

const FloorPlan = styled.div`
    position: relative;
    align-self: center;
    width: 100%;
    height: 100%;
    background-color: ${Colors.darkerBlue};
    box-shadow:  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    overflow: scroll;
    // Add right and bottom padding to scroll view
    & > :after {
        content: '';
        display: block;
        position: absolute;
        right: -100px;
        bottom: -75px;
        width: 1px;
        height: 1px;
    }
    // Hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    // Prevent highlighting
    & > * {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
`;

const Title = styled.h1`
    margin: 0 25px;
    font-weight: 400;
    color: ${Colors.darkBlue};
    font-family: ${Fonts.titleFont};
`;

const Error = styled.h2`
    align-self: center;
    margin: 0 20px;
    color: ${Colors.red};
    font-family: ${Fonts.titleFont};
`;

const FloorPlanPage = () => {
    const floorPlanElement = useRef();
    const ZOOM_INCREMENT = 0.1;
    const MIN_SCALE = 0.6;
    const MAX_SCALE = 1.4;
    const [scale, setScale] = useState(0.6);
    const { rooms } = useRooms();
    const [error, setError] = useState(null);
    const hasCentered = useRef(false);

    useEffect(() => {
        if (rooms.length === 0) {
            setError('No rooms found. Try again.');
            return;
        }
        setError(null);
        if (hasCentered.current || !floorPlanElement.current) {
            return;
        }
        // Centers the floor plan view
        const { scrollWidth, scrollHeight, clientWidth, clientHeight } = floorPlanElement.current;
        floorPlanElement.current.scroll({
            left: scrollWidth / 2 - clientWidth / 2,
            top: scrollHeight / 2 - clientHeight / 2,
            behavior: 'instant',
        });
        hasCentered.current = true;
    }, [rooms.length, floorPlanElement.current]);

    const updateScale = (increment) => {
        setScale((curr) => clamp(curr + increment, MIN_SCALE, MAX_SCALE));
    };

    return (
        <Container>
            <Title>Floor Plan</Title>
            <Strut vertical size={25} />
            {error ? (
                <Error>{error}</Error>
            ) : (
                <FloorPlanContainer>
                    <Control
                        onZoom={() => updateScale(ZOOM_INCREMENT)}
                        onUnzoom={() => updateScale(-ZOOM_INCREMENT)}
                    />
                    <FloorPlan ref={floorPlanElement}>
                        {rooms.map((room) => (
                            <Room
                                key={room.roomId}
                                roomId={room.roomId}
                                name={room.name}
                                x={room.x}
                                y={room.y}
                                width={room.width}
                                height={room.height}
                                devices={room.devices}
                                scale={scale}
                            />
                        ))}
                    </FloorPlan>
                </FloorPlanContainer>
            )}
        </Container>
    );
};

export default FloorPlanPage;
