import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import { Strut } from 'components/Layout';
import { clamp } from 'util/math';
import URLS from 'constants/urls';
import useRequest from 'hooks/useRequest';
import Room from './components/Room';
import Control from './components/Control';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 15px 0;
`;

const FloorPlanContainer = styled.div`
    position: relative;
    max-width: 100%;
    height: 95%;
    margin: 0 15px;
    border-radius: 20px;
    overflow: hidden;
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
    background-color: ${Colors.loginButtonColor};
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
    color: ${Colors.darkBlue};
    font-family: ${Fonts.titleFont};
`;

const Error = styled.h2`
    align-self: center;
    margin: 0 25px;
    color: ${Colors.red};
    font-family: ${Fonts.titleFont};
`;

const FloorPlanPage = () => {
    const floorPlanElement = useRef();
    const ZOOM_INCREMENT = 0.1;
    const MIN_SCALE = 0.6;
    const MAX_SCALE = 1.4;
    const [scale, setScale] = useState(0.7);
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const request = useRequest();

    useEffect(() => {
        const getRooms = async () => {
            try {
                const resp = await request.get(URLS.rooms);
                setError(null);
                setRooms(resp);
            } catch (errMessage) {
                setError(errMessage);
                setRooms([]);
            }
        };
        getRooms();
    }, []);

    useEffect(() => {
        if (rooms.length === 0) {
            return;
        }
        // Centers the floor plan view
        const { scrollWidth, scrollHeight, clientWidth, clientHeight } = floorPlanElement.current;
        floorPlanElement.current.scroll({
            left: scrollWidth / 2 - clientWidth / 2,
            top: scrollHeight / 2 - clientHeight / 2,
            behavior: 'instant',
        });
    }, [rooms.length]);

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
