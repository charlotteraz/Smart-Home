import React from 'react';
import styled from 'styled-components';
import Colors from '../../../../constants/colors';

const Container = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: ${Colors.lightBlue};
`;

const Navbar = () => <Container />;

export default Navbar;
