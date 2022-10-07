import React from 'react';
import LoginPage from 'pages/LoginPage';
import styled from 'styled-components';

const Root = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <Root>
        <LoginPage />
    </Root>
);

export default App;
