import React from 'react';
import styled from 'styled-components';
import DeviceStateField from 'pages/MaintenancePage/components/DeviceStateField';
import { Strut } from 'components/Layout';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import { useRooms } from 'contexts/RoomsContext';

const Container = styled.div`
    background-color: ${Colors.white};
    padding: 15px;
    border-radius: 6px;
`;

const FieldContainer = styled.div`
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 25px;
    font-family: ${Fonts.titleFont};
    color: ${Colors.lightBlue};
    font-weight: 400;
    margin-left: 10px;
    height: 20px;
`;

const RoomStateCard = (props) => {
    const { roomId, name, devices } = props;
    const { updateDevice } = useRooms();

    const handleStateChange = (deviceId, state) => {
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
        <Container>
            <Title>{name}</Title>
            <Strut vertical size={20} />
            <FieldContainer>
                {devices.map((device) => (
                    <DeviceStateField
                        key={device.deviceId}
                        name={device.name}
                        state={device.state}
                        onChange={(state) => handleStateChange(device.deviceId, state)}
                    />
                ))}
            </FieldContainer>
        </Container>
    );
};

export default RoomStateCard;
