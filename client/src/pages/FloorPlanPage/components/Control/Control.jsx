import Button from 'components/Button';
import Colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 100px;
    background-color: ${Colors.offBlack};
    border: 2px solid ${Colors.offWhite};
    border-bottom-left-radius: 10px;
    border-style: none none solid solid;
    padding: 15px;
    z-index: 1;
`;

const ZoomButton = styled(Button)`
    width: 50px;
    aspect-ratio: 1;
    font-size: 18pt;
    font-weight: bold;
    background-color: ${Colors.offWhite};
    color: ${Colors.offBlack};
`;

const Vertical = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const Control = (props) => {
    const { onZoom, onUnzoom } = props;
    return (
        <Container>
            <Vertical>
                <ZoomButton title="+" onClick={() => onZoom()} />
                <ZoomButton title="-" onClick={() => onUnzoom()} />
            </Vertical>
        </Container>
    );
};

export default Control;
