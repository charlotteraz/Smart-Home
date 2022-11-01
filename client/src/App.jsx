import React from 'react';
import styled from 'styled-components';
import * as Router from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import FloorPlanPage from 'pages/FloorPlanPage';
import UsageDataPage from 'pages/UsageDataPage';
import MaintenancePage from 'pages/MaintenancePage';
import ErrorPage from 'pages/ErrorPage';
import Routes from 'constants/routes';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <React.StrictMode>
        <Container>
            <Router.BrowserRouter>
                <Router.Routes>
                    <Router.Route path={Routes.Login} element={<LoginPage />} />
                    <Router.Route path={Routes.Home} element={<HomePage />}>
                        <Router.Route path={Routes.FloorPlan} element={<FloorPlanPage />} />
                        <Router.Route path={Routes.UsageData} element={<UsageDataPage />} />
                        <Router.Route path={Routes.Maintenance} element={<MaintenancePage />} />
                    </Router.Route>
                    <Router.Route path="*" element={<ErrorPage />} />
                </Router.Routes>
            </Router.BrowserRouter>
        </Container>
    </React.StrictMode>
);

export default App;
