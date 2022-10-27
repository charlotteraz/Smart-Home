import React from 'react';
import styled from 'styled-components';
import * as RouterDom from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import ErrorPage from 'pages/ErrorPage';
import Routes from 'constants/routes';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <React.StrictMode>
        <Container>
            <RouterDom.BrowserRouter>
                <RouterDom.Routes>
                    <RouterDom.Route path={Routes.Login} element={<LoginPage />} />
                    <RouterDom.Route path={`${Routes.Home}/*`} element={<HomePage />} />
                    <RouterDom.Route path="/*" element={<ErrorPage />} />
                </RouterDom.Routes>
            </RouterDom.BrowserRouter>
        </Container>
    </React.StrictMode>
);

export default App;
