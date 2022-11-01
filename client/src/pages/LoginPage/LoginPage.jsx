import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'constants/colors';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Strut } from 'components/Layout';
import useSessionStorage from 'hooks/useSessionStorage';
import Routes from 'constants/routes';
import ReactLogo from 'assets/smartHomeIcon.png';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5f84a1;
`;

const Title = styled.h1`
    color: #1a4568;
    font-size: 25pt;
    font-family: 'Bebas Neue';
    font-weight: 400;
    margin-top: -30px;
`;

const Error = styled.h5`
    color: ${Colors.lightRed};
`;

const FieldBox = styled.div`
    display: flex;
    width: 300px;
    height: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    align-self: center;
    padding: 40px;
    background-color: ${Colors.white};
    box-shadow: 5px 5px #2d5e85;
`;

const LoginButton = styled(Button)`
    background-color: #1a4568;
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

    const validateCredentials = () => {
        if (email.length === 0 || password.length === 0) {
            setError('Invalid email or password');
            return;
        }
        setError(null);
        // TODO: Pass 'userId' returned from login query.
        sessionStorage.setItem('userId', 1);
        navigate(Routes.Home);
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
