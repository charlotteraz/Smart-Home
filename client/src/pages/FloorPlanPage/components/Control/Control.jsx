import Button from 'components/Button';
import Colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 62px;
    right: 32px;
    width: 65px;
    height: 100px;
    background-color: ${Colors.offBlack};
    border: 1px solid ${Colors.offWhite};
    border-radius: 10px;
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
