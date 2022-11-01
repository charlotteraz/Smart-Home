import React from 'react';
import styled from 'styled-components';
import DeviceStateField from 'pages/MaintenancePage/components/DeviceStateField';
import { Strut } from 'components/Layout';
import Colors from 'constants/colors';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${Colors.white};
    border: 2px solid ${Colors.offBlack};
    border-radius: 8px;
`;

const FieldContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h1``;

const RoomStateCard = (props) => {
    const { roomId, name, devices } = props;

    const handleStateChange = (deviceId, state) => {
        // eslint-disable-next-line no-console
        console.log(`Room: ${roomId}, Device: ${deviceId}, State: ${state}`);
        // TODO: SET request to update device state
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
                        onChange={(state) => handleStateChange(device.deviceId, state)}
                    />
                ))}
            </FieldContainer>
        </Container>
    );
};

export default RoomStateCard;
