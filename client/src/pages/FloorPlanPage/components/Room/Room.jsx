import React, { useState, useMemo } from 'react';
import Colors from 'constants/colors';
import { useRooms } from 'contexts/RoomsContext';
import styled from 'styled-components';
import Device from '../Device';
import DeviceStateModal from '../DeviceStateModal';

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.offWhite};
    border: solid 2px ${Colors.offBlack};
    border-radius: 8px;
    transition-property: left, top, width, height;
    transition-duration: 150ms;
`;

const Title = styled.h1`
    color: ${Colors.offBlack};
    transition: font-size 150ms;
`;

const Room = (props) => {
    const { roomId, name, x, y, width, height, devices, scale = 1.0 } = props;
    const { updateDevice } = useRooms();
    const [modalDeviceId, setModalDeviceId] = useState(null);

    const modalDevice = useMemo(() => {
        if (modalDeviceId === null) {
            return null;
        }
        return devices.find((device) => device.deviceId === modalDeviceId) ?? null;
    }, [modalDeviceId]);

    const handleDeviceStateChange = (deviceId, state) => {
        // TODO: Make POST request to change device state
        // Note: The POST request should return updated device object
        const targetDevice = devices.find((dev) => dev.deviceId === deviceId);
        if (!targetDevice) {
            return;
        }
        targetDevice.state = state;
        updateDevice(roomId, deviceId, targetDevice);
    };

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
                // Only specific devices should be clickable
                const isClickable =
                    lowercaseName.includes('light') ||
                    lowercaseName.includes('lamp') ||
                    lowercaseName.includes('overhead');
                return (
                    <Device
                        key={device.deviceId}
                        deviceId={device.deviceId}
                        name={device.name}
                        x={device.x}
                        y={device.y}
                        state={device.state}
                        dynamicBackground={isClickable}
                        square={square}
                        direction={direction}
                        scale={scale}
                        onClick={(deviceId) => isClickable && setModalDeviceId(deviceId)}
                    />
                );
            })}
            {modalDeviceId !== null && modalDevice !== null && (
                <DeviceStateModal
                    name={modalDevice.name}
                    state={modalDevice.state}
                    onChange={(state) => handleDeviceStateChange(modalDeviceId, state)}
                    onClose={() => setModalDeviceId(null)}
                />
            )}
        </Container>
    );
};

export default Room;
