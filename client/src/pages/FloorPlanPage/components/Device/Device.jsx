import React from 'react';
import styled from 'styled-components';
import Colors from 'constants/colors';
import { clamp } from 'util/math';

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    aspect-ratio: 1;
    color: ${Colors.offWhite};
    transition-property: width, left, top, font-size, border-width, transform;
    transition-duration: 150ms;
    transform: translate(-50%, -50%);
    &:hover {
        transform: translate(-50%, -50%) scale(1.05);
        cursor: pointer;
    }
`;

const CircleContainer = styled(Container)`
    border-style: solid;
    border-color: ${Colors.offWhite};
    border-radius: 50%;
`;

const SquareContainer = styled(Container)`
    background-color: ${Colors.offWhite};
`;

const OffsetTitle = styled.div`
    position: absolute;
`;

const Device = (props) => {
    const { name, x, y, square = false, direction = null, scale = 1.0 } = props;

    const getDynamicStyles = () => ({
        width: scale * (!square ? 70 : 25),
        left: x * scale,
        top: y * scale,
        fontSize: 13 * scale,
        borderWidth: !square ? clamp(2 * scale, 1, 2) : undefined,
    });

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
        <CircleContainer style={getDynamicStyles()}>{name}</CircleContainer>
    ) : (
        <SquareContainer style={getDynamicStyles()}>
            <OffsetTitle style={getOffsetTitleStyle()}>{name}</OffsetTitle>
        </SquareContainer>
    );
};

export default Device;
