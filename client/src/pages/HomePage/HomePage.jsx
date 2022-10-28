import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from 'pages/HomePage/components/Navbar';
import useSessionStorage from 'hooks/useSessionStorage';
import Routes from 'constants/routes';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const HomePage = () => {
    const navigate = useNavigate();
    const sessionStorage = useSessionStorage();
    const [userId, setUserId] = useState(null);

    // Auto-shows the floorplan first
    useEffect(() => {
        const sessionUserId = sessionStorage.getItem('userId');
        if (sessionUserId) {
            setUserId(sessionUserId);
            navigate(Routes.FloorPlan);
        } else {
            setUserId(null);
            navigate(Routes.Error, { state: { message: 'Session ended!' } });
        }
    }, []);

    return (
        <Container>
            <Navbar />
            <div>{userId}</div>
            <Outlet />
        </Container>
    );
};

export default HomePage;
