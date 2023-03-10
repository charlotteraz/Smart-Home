import React from 'react';
import styled from 'styled-components';
import DeviceStateField from 'pages/MaintenancePage/components/DeviceStateField';
import { Strut } from 'components/Layout';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import { useRooms } from 'contexts/RoomsContext';
import Debug from 'util/debug';
import useRequest from 'hooks/useRequest';
import URLS from 'constants/urls';
import HVACStateField from '../HVACStateField';

const Container = styled.div`
    background-color: ${Colors.white};
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
`;

const FieldContainer = styled.div`
    flex-direction: column;
    margin: 0;
`;

const Title = styled.h1`
    font-size: 16px;
    font-family: ${Fonts.titleFont};
    color: ${Colors.white};
    font-weight: 400;
    height: 20px;
    background-color: ${Colors.darkBlue};
    padding: 8px;
    border-radius: 10px;
`;

const RoomStateCard = (props) => {
    const { roomId, name, devices } = props;
    const { updateDevice } = useRooms();
    const request = useRequest();

    const handleStateChange = async (deviceId, state) => {
        try {
            await request.post(URLS.devices, {
                deviceId,
                state,
            });
            const targetDevice = devices.find((dev) => dev.deviceId === deviceId);
            if (!targetDevice) {
                return;
            }
            targetDevice.state = state;
            updateDevice(roomId, deviceId, targetDevice);
        } catch (errMessage) {
            Debug.log(errMessage);
        }
    };

    const handleTempChange = async (deviceId, temp) => {
        try {
            await request.post(URLS.hvac, {
                temp,
            });
            const targetDevice = devices.find((dev) => dev.deviceId === deviceId);
            if (!targetDevice) {
                return;
            }
            targetDevice.temp = temp;
            updateDevice(roomId, deviceId, targetDevice);
        } catch (errMessage) {
            Debug.log(errMessage);
        }
    };

    return (
        <Container>
            <Title>{name}</Title>
            <Strut vertical size={20} />
            <FieldContainer>
                {devices.map((device) =>
                    device.name.toLowerCase().includes('hvac') ? (
                        <HVACStateField
                            key={device.deviceId}
                            name={device.name}
                            temp={device.temp ?? 0}
                            onTempChange={(temp) => handleTempChange(device.deviceId, temp)}
                        />
                    ) : (
                        <DeviceStateField
                            key={device.deviceId}
                            name={device.name}
                            state={device.state}
                            onChange={(state) => handleStateChange(device.deviceId, state)}
                        />
                    )
                )}
            </FieldContainer>
        </Container>
    );
};

export default RoomStateCard;
