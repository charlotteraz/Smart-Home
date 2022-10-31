import Colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import Device from '../Device';

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.offBlack};
    border: solid 2px ${Colors.offWhite};
    border-radius: 8px;
    transition-property: left, top, width, height;
    transition-duration: 150ms;
`;

const Title = styled.h1`
    color: ${Colors.offWhite};
    transition: font-size 150ms;
`;

const Room = (props) => {
    const { name, x, y, width, height, devices, scale = 1.0 } = props;

    return (
        <Container
            style={{
                left: x * scale,
                top: y * scale,
                width: width * scale,
                height: height * scale,
            }}
        >
            <Title style={{ fontSize: 20 * scale }}>{name}</Title>
            {devices.map((device) => {
                // Check if the device is a door or window,
                // if so render it as a square on the edge.
                const lowercaseName = device.name.toLowerCase();
                let square = false;
                if (lowercaseName.includes('door') || lowercaseName.includes('window')) {
                    square = true;
                }
                // If device will be square, then find which direction to show
                // its name when the mouse hovers over it.
                let direction = null;
                if (device.x === 0) {
                    direction = 'left';
                } else if (device.x === width) {
                    direction = 'right';
                } else if (device.y === 0) {
                    direction = 'top';
                } else if (device.y === height) {
                    direction = 'bottom';
                }
                return (
                    <Device
                        key={device.deviceId}
                        name={device.name}
                        x={device.x}
                        y={device.y}
                        square={square}
                        direction={direction}
                        scale={scale}
                    />
                );
            })}
        </Container>
    );
};

export default Room;
