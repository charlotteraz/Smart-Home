import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import ErrorPage from 'pages/ErrorPage';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <React.StrictMode>
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home/*" element={<HomePage />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </Container>
    </React.StrictMode>
);

export default App;
