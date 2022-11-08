import React from 'react';
import styled from 'styled-components';
import ReactLogo from 'assets/smartHomeIcon.png';
import Routes from 'constants/routes';
import { Link } from 'react-router-dom';
import Colors from '../../../../constants/colors';

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 80px;
    background-color: ${Colors.lightBlue};
    justify-content: space-between;
`;

const NavLink = styled(Link)`
    color: ${Colors.white};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    margin: 0 15px;
    gap: 10px;
`;

const HomeLogo = styled.img`
    width: 50px;
    height: 50px;
    align-self: center;
    margin: 0 15px;
`;

const Navbar = () => (
    <Container>
        <HomeLogo className="HomeLogo" src={ReactLogo} />
        <StyledNavbar>
            <NavLink to={Routes.FloorPlan}>Floor Plan</NavLink>
            <NavLink to={Routes.Maintenance}>Maintenance</NavLink>
            <NavLink to={Routes.UsageData}>Usage</NavLink>
            <NavLink to={Routes.Login}>Logout</NavLink>
        </StyledNavbar>
    </Container>
);
export default Navbar;
