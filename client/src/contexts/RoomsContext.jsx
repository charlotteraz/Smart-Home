import React, { useContext, useState } from 'react';

const RoomsContext = React.createContext();

export const useRooms = () => {
    const context = useContext(RoomsContext);
    if (context === undefined) {
        throw new Error('The useRooms hook must be used within a BananaContext.Provider');
    }
    return context;
};

export const RoomsContextProvider = (props) => {
    const { children } = props;
    const [rooms, setRooms] = useState([]);

    const updateDevice = (roomId, deviceId, device) => {
        setRooms((oldRooms) => {
            const newRooms = [...oldRooms];
            const targetRoom = newRooms.find((room) => room.roomId === roomId);
            const targetDeviceIndex = targetRoom?.devices.findIndex(
                (dev) => dev.deviceId === deviceId
            );
            if (targetDeviceIndex === undefined) {
                return newRooms;
            }
            targetRoom.devices[targetDeviceIndex] = device;
            return newRooms;
        });
    };

    return (
        <RoomsContext.Provider value={{ rooms, setRooms, updateDevice }}>
            {children}
        </RoomsContext.Provider>
    );
};
