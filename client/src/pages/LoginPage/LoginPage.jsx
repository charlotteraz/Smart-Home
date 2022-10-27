import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'constants/colors';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Strut } from 'components/Layout';
import useSessionStorage from 'hooks/useSessionStorage';
import Routes from 'constants/routes';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.blue};
`;

const Title = styled.h1`
    color: ${Colors.offWhite};
    font-size: 35pt;
`;

const Error = styled.h5`
    color: ${Colors.lightRed};
`;

const FieldBox = styled.div`
    display: flex;
    width: 475px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    align-self: center;
    padding: 35px;
    border-radius: 15px;
    background-color: ${Colors.offBlack};
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
            <Title>Smart Home</Title>
            <Strut size={50} vertical />
            <FieldBox>
                {error && <Error>{error}</Error>}
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
                <Button
                    title="Login"
                    backgroundColor={Colors.lightBlue}
                    color={Colors.black}
                    onClick={() => validateCredentials()}
                />
            </FieldBox>
        </Container>
    );
};

export default LoginPage;
