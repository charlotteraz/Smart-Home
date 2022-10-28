import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Room from './components/Room';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const FloorPlan = styled.div`
    position: relative;
    align-self: center;
    width: 95%;
    height: 90%;
    background-color: ${Colors.black};
    overflow: scroll;
    scroll-padding: 50px;
`;

// Temporary data
const ROOMS = [
    {
        roomId: 1,
        name: 'Bathroom 1',
        x: 100,
        y: 125,
        width: 300,
        height: 200,
        devices: [
            {
                deviceId: 1,
                name: 'Fan',
                x: 50,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Overhead Light',
                x: 250,
                y: 150,
            },
            {
                deviceId: 3,
                name: 'Window',
                x: 0,
                y: 120,
            },
        ],
    },
    {
        roomId: 2,
        name: 'Bedroom 1',
        x: 400,
        y: 75,
        width: 275,
        height: 275,
        devices: [
            {
                deviceId: 1,
                name: 'Lamp 1',
                x: 50,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Lamp 2',
                x: 225,
                y: 50,
            },
            {
                deviceId: 3,
                name: 'Overhead Light',
                x: 50,
                y: 225,
            },
            {
                deviceId: 4,
                name: 'TV',
                x: 225,
                y: 225,
            },
            {
                deviceId: 4,
                name: 'Window 1',
                x: 140,
                y: 0,
            },
            {
                deviceId: 5,
                name: 'Window 2',
                x: 275,
                y: 140,
            },
        ],
    },
    {
        roomId: 3,
        name: 'Living Room',
        x: 400,
        y: 350,
        width: 750,
        height: 325,
        devices: [
            {
                deviceId: 1,
                name: 'TV',
                x: 450,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Lamp 1',
                x: 360,
                y: 50,
            },
            {
                deviceId: 3,
                name: 'Lamp 2',
                x: 540,
                y: 50,
            },
            {
                deviceId: 4,
                name: 'Overhead Light',
                x: 375,
                y: 275,
            },
            {
                deviceId: 5,
                name: 'HVAC',
                x: 700,
                y: 275,
            },
            {
                deviceId: 6,
                name: 'Window 1',
                x: 750,
                y: 135,
            },
            {
                deviceId: 6,
                name: 'Window 2',
                x: 750,
                y: 200,
            },
            {
                deviceId: 7,
                name: 'Window 3',
                x: 0,
                y: 115,
            },
            {
                deviceId: 8,
                name: 'Front Door',
                x: 0,
                y: 50,
            },
            {
                deviceId: 9,
                name: 'Back Door',
                x: 650,
                y: 0,
            },
        ],
    },
    {
        roomId: 4,
        name: 'Garage',
        x: 100,
        y: 525,
        width: 300,
        height: 300,
        devices: [
            {
                deviceId: 1,
                name: 'Washer',
                x: 250,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Dryer',
                x: 250,
                y: 250,
            },
            {
                deviceId: 3,
                name: 'Garage Door',
                x: 300,
                y: 100,
            },
            {
                deviceId: 4,
                name: 'Garage Door 1',
                x: 0,
                y: 125,
            },
            {
                deviceId: 5,
                name: 'Garage Door 2',
                x: 0,
                y: 200,
            },
        ],
    },
    {
        roomId: 5,
        name: 'Kitchen',
        x: 500,
        y: 675,
        width: 500,
        height: 300,
        devices: [
            {
                deviceId: 1,
                name: 'Overhead Light',
                x: 250,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Washer',
                x: 50,
                y: 150,
            },
            {
                deviceId: 3,
                name: 'Fridge',
                x: 450,
                y: 150,
            },
            {
                deviceId: 4,
                name: 'Stove',
                x: 160,
                y: 250,
            },
            {
                deviceId: 5,
                name: 'Oven',
                x: 250,
                y: 250,
            },
            {
                deviceId: 6,
                name: 'Microwave',
                x: 340,
                y: 250,
            },
            {
                deviceId: 7,
                name: 'Window 1',
                x: 50,
                y: 300,
            },
            {
                deviceId: 8,
                name: 'Window 2',
                x: 450,
                y: 300,
            },
        ],
    },
    {
        roomId: 6,
        name: 'Bedroom 2',
        x: 1150,
        y: 150,
        width: 275,
        height: 275,
        devices: [
            {
                deviceId: 1,
                name: 'Lamp 1',
                x: 50,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Lamp 2',
                x: 225,
                y: 50,
            },
            {
                deviceId: 3,
                name: 'Overhead Light',
                x: 135,
                y: 225,
            },
            {
                deviceId: 4,
                name: 'Window 1',
                x: 105,
                y: 0,
            },
            {
                deviceId: 5,
                name: 'Window 2',
                x: 170,
                y: 0,
            },
        ],
    },
    {
        roomId: 7,
        name: 'Bathroom 2',
        x: 1425,
        y: 190,
        width: 300,
        height: 200,
        devices: [
            {
                deviceId: 1,
                name: 'Fan',
                x: 250,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Overhead Light',
                x: 50,
                y: 150,
            },
            {
                deviceId: 3,
                name: 'Window',
                x: 300,
                y: 120,
            },
        ],
    },
    {
        roomId: 8,
        name: 'Bedroom 3',
        x: 1150,
        y: 600,
        width: 275,
        height: 275,
        devices: [
            {
                deviceId: 1,
                name: 'Lamp 1',
                x: 50,
                y: 50,
            },
            {
                deviceId: 2,
                name: 'Lamp 2',
                x: 225,
                y: 50,
            },
            {
                deviceId: 3,
                name: 'Overhead Light',
                x: 140,
                y: 225,
            },
            {
                deviceId: 4,
                name: 'Window 1',
                x: 275,
                y: 150,
            },
            {
                deviceId: 5,
                name: 'Window 2',
                x: 75,
                y: 275,
            },
        ],
    },
];

// TODO:
// 1. Add padding to the right and bottom of the FloorPlan
// 2. Begin scroll x and scrool y at the halfway point
// 3. Hide scrollbar

const FloorPlanPage = () => (
    <Container>
        <FloorPlan>
            {ROOMS.map((room) => (
                <Room
                    key={room.roomId}
                    name={room.name}
                    x={room.x}
                    y={room.y}
                    width={room.width}
                    height={room.height}
                    devices={room.devices}
                />
            ))}
        </FloorPlan>
    </Container>
);

export default FloorPlanPage;
