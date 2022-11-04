import React from 'react';
import styled from 'styled-components';
import DeviceStateField from 'pages/MaintenancePage/components/DeviceStateField';
import { Strut } from 'components/Layout';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';

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

    const handleStateChange = (deviceId, state) => {
        // eslint-disable-next-line no-console
        console.log(`Room: ${roomId}, Device: ${deviceId}, State: ${state}`);
        // TODO: Make SET request to update device state
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
