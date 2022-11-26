import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'constants/colors';
import Fonts from 'constants/fonts';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Strut } from 'components/Layout';
import useSessionStorage from 'hooks/useSessionStorage';
import Routes from 'constants/routes';
import URLS from 'constants/urls';
import ReactLogo from 'assets/smartHomeIcon.png';
import useRequest from 'hooks/useRequest';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.lightBlue};
`;

const Title = styled.h1`
    color: ${Colors.darkerBlue};
    font-size: 20pt;
    font-family: ${Fonts.titleFont};
    font-weight: 900;
    margin-top: -30px;
`;

const Error = styled.h5`
    color: ${Colors.lightRed};
`;

const FieldBox = styled.div`
    display: flex;
    width: 350px;
    height: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    align-self: center;
    padding: 50px;
    background-color: ${Colors.white};
    border-radius: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    background: linear-gradient(white, white) padding-box,
        linear-gradient(to right, ${Colors.darkerBlue}, ${Colors.strongBlue}) border-box;
    border-top: 7px solid transparent;
`;

const LoginButton = styled(Button)`
    background-color: ${Colors.darkBlue};
    color: ${Colors.white};
    font-weight: 400;
`;

const HomeLogo = styled.img`
    width: 100px;
    margin-top: -15px;
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const sessionStorage = useSessionStorage();
    const request = useRequest();

    const validateCredentials = async () => {
        if (email.length === 0 || password.length === 0) {
            setError('Invalid email or password');
            return;
        }
        try {
            const postData = { email, password };
            const respData = await request.post(URLS.login, postData);
            setError(null);
            sessionStorage.setItem('userId', respData.userId);
            navigate(Routes.Home);
        } catch (errMessage) {
            setError(errMessage);
        }
    };

    return (
        <Container>
            <Strut size={50} vertical />
            <FieldBox>
                {error && <Error>{error}</Error>}
                <HomeLogo className="HomeLogo" src={ReactLogo} />
                <Title>Smart Home</Title>
                <TextField
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <TextField
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <LoginButton title="Login" onClick={() => validateCredentials()} />
            </FieldBox>
        </Container>
    );
};

export default LoginPage;
