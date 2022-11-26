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
    width: 55px;
    height: 75px;
    background-color: ${Colors.offBlack};
    border: 
    border-bottom-left-radius: 10px;
    padding: 15px;
    z-index: 1;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 1);
`;

const ZoomButton = styled(Button)`
    width: 40px;
    aspect-ratio: 1;
    font-size: 16pt;
    margin: 5px;
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
