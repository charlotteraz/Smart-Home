import Colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 140px;
    height: 45px;
    border-style: none;
    border-radius: 10px;
    transition: transform 500ms;
    font-size: 12pt;
    font-weight: 600;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    &:active {
        transform: scale(1);
    }
`;

const Button = (props) => {
    const { title, backgroundColor = Colors.blue, color = Colors.white, onClick } = props;
    return (
        <StyledButton style={{ backgroundColor, color }} onClick={onClick}>
            {title}
        </StyledButton>
    );
};

export default Button;
