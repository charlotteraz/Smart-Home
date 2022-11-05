import React from 'react';
import styled from 'styled-components';
import ReactLogo from 'assets/smartHomeIcon.png';
import Routes from 'constants/routes';
import { Link } from 'react-router-dom';
import Colors from '../../../../constants/colors';

const Container = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: ${Colors.lightBlue};
`;

const Nav = styled(Link)`
    background: #000
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;
`;

const NavLink = styled.link`
    color: #fff;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;
`;

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
`;

const HomeLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-top: -15px;
`;

const Navbar = () => (
    <Container>
        <Nav>
            <NavLink to={Routes.Home}>
                <HomeLogo className="HomeLogo" src={ReactLogo} />
            </NavLink>
            <StyledNavbar>
                <NavLink to={Routes.FloorPlan}>Floor Plan</NavLink>
                <NavLink to={Routes.Home}>Home</NavLink>
                <NavLink to={Routes.Login}>Login/Logout</NavLink>
                <NavLink to={Routes.Maintenance}>Maintenance</NavLink>
                <NavLink to={Routes.UsageData}>Usage</NavLink>
            </StyledNavbar>
        </Nav>
    </Container>
);
export default Navbar;
