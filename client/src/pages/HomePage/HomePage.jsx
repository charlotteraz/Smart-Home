import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from 'pages/HomePage/components/Navbar';
import FloorPlanPage from 'pages/FloorPlanPage';
import UserDataPage from 'pages/UserDataPage';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const HomePage = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);

    // Auto-shows the floorplan first
    useEffect(() => {
        const sessionUserId = window.sessionStorage.getItem('userId');
        if (sessionUserId) {
            setUserId(sessionUserId);
            navigate('/home/floorplan');
        } else {
            setUserId(null);
            navigate('/error', { state: { message: 'Session ended!' } });
        }
    }, []);

    return (
        <Container>
            <Navbar />
            <div>{userId}</div>
            <Routes>
                <Route path="/home/floorplan" element={<FloorPlanPage />} />
                <Route path="/home/userdata" element={<UserDataPage />} />
            </Routes>
        </Container>
    );
};

export default HomePage;
