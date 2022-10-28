import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: transform 200ms;
    font-size: 9pt;
    color: ${Colors.offWhite};
    transform: translate(-50%, -50%);
    &:hover {
        transform: translate(-50%, -50%) scale(1.05);
        cursor: pointer;
    }
`;

const CircleContainer = styled(Container)`
    width: 70px;
    aspect-ratio: 1;
    border: solid 2px ${Colors.offWhite};
    border-radius: 50%;
`;

const SquareContainer = styled(Container)`
    width: 25px;
    height: 25px;
    background-color: ${Colors.offWhite};
`;

const OffsetTitle = styled.div`
    position: absolute;
`;

const Device = (props) => {
    const { name, x, y, square = false, direction = null } = props;

    const getLocationStyle = () => ({ left: x, top: y });

    const getOffsetTitleStyle = () => {
        switch (direction) {
            case 'top':
                return { bottom: '100%', transform: 'translateY(-5px)' };
            case 'right':
                return { left: '100%', transform: 'translateX(5px)' };
            case 'bottom':
                return { top: '100%', transform: 'translateY(5px)' };
            case 'left':
                return { right: '100%', transform: 'translateX(-5px)' };
            default:
                throw new Error(`Invalid direction property: ${direction}`);
        }
    };

    return !square ? (
        <CircleContainer style={getLocationStyle()}>{name}</CircleContainer>
    ) : (
        <SquareContainer style={getLocationStyle()}>
            <OffsetTitle style={getOffsetTitleStyle()}>{name}</OffsetTitle>
        </SquareContainer>
    );
};

export default Device;
