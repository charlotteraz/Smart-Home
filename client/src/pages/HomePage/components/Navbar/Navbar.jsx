import React from 'react';
import styled from 'styled-components';
import ReactLogo from 'assets/smartHomeIcon.png';
import Routes from 'constants/routes';
import { NavLink } from 'react-router-dom';
import Fonts from 'constants/fonts';
import Colors from '../../../../constants/colors';

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 80px;
    background-color: ${Colors.white};
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`;

const Nav = styled(NavLink)`
    color: ${Colors.darkGray};
    display: block;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    margin: 5px 5px;
    padding-top: 30px;
    padding-bottom: 30px;
    cursor: pointer;
    &:hover {
        color: ${Colors.darkBlue};
    }
    &.${(props) => props.activeClassName} {
        border-bottom: 3px solid ${Colors.darkBlue};
        color: ${Colors.black};
    }
`;

const StyledNavbar = styled.div`
    display: flex;
    margin: 0 10%;
`;

const HomeLogo = styled.img`
    width: 50px;
    height: 50px;
    align-self: center;
    margin-left: 10%;
    margin-right: -32%;
`;

const Title = styled.h1`
    color: ${Colors.darkerBlue};
    font-size: 20px;
    font-family: ${Fonts.titleFont};
`;

const Navbar = () => (
    <Container>
        <HomeLogo className="HomeLogo" src={ReactLogo} />
        <Title> Smart Home </Title>
        <StyledNavbar>
            <Nav activeClassName="active" to={Routes.FloorPlan}>
                Floor Plan
            </Nav>
            <Nav activeClassName="active" to={Routes.UsageData}>
                Usage
            </Nav>
            <Nav activeClassName="active" to={Routes.Maintenance}>
                Maintenance
            </Nav>
            <Nav to={Routes.Login}> Logout </Nav>
        </StyledNavbar>
    </Container>
);
export default Navbar;
