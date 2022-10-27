import { Strut } from 'components/Layout';
import Colors from 'helpers/colors';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${Colors.offWhite};
    color: ${Colors.offBlack};
`;

const ErrorPage = () => {
    const location = useLocation();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (location.state?.message) {
            setMessage(location.state.message);
        }
    }, []);

    return (
        <Container>
            <h1>{message ?? 'Something went wrong!'}</h1>
            <Strut size={15} vertical />
            <h3>
                Please click <Link to="/">here</Link> to login.
            </h3>
        </Container>
    );
};

export default ErrorPage;
