import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { RoomsContextProvider, useRooms } from 'contexts/RoomsContext';
import styled from 'styled-components';
import useRequest from 'hooks/useRequest';
import Navbar from 'pages/HomePage/components/Navbar';
import Routes from 'constants/routes';
import URLS from 'constants/urls';
import Debug from 'util/debug';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const HomePage = () => {
    const navigate = useNavigate();
    const request = useRequest();
    const { setRooms } = useRooms();
    // TODO: Make use of userId
    // eslint-disable-next-line no-unused-vars
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const getRooms = async () => {
            // Get the user id
            const sessionUserId = sessionStorage.getItem('userId');
            if (sessionUserId) {
                setUserId(sessionUserId);
            } else {
                setUserId(null);
                navigate(Routes.Error, { state: { message: 'Session ended!' } });
                return;
            }
            // Get the rooms for the current user
            try {
                const respRooms = await request.get(URLS.rooms);
                setRooms(respRooms);
            } catch (errMessage) {
                Debug.log(errMessage);
                setRooms([]);
            }
            // Shows the floor plan first
            navigate(Routes.FloorPlan);
        };
        getRooms();
    }, []);

    return (
        <Container>
            <Navbar />
            <Outlet />
        </Container>
    );
};

const HomePageWithProvider = (props) => (
    <RoomsContextProvider>
        <HomePage {...props} />
    </RoomsContextProvider>
);

export default HomePageWithProvider;
