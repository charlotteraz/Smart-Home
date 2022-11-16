import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Colors from 'constants/colors';
import { Strut } from 'components/Layout';
import TextField from 'components/TextField';
import { clamp } from 'util/math';

const ModalContainer = styled.div`
    position: relative;
    align-self: center;
    width: 300px;
    border-radius: 10px;
    background-color: ${Colors.offBlack};
    border: solid 4px ${Colors.white};
    color: ${Colors.white};
    padding: 10px;
`;

const Title = styled.h2``;

const StateTitle = styled.h3``;

const HorizontalContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const CloseButton = styled(Button)`
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    color: ${Colors.offBlack};
    background-color: ${Colors.white};
`;

const TempField = styled(TextField)`
    width: 100px;
    height: 35px;
    border-radius: 6px;
`;

const HVACStateModal = (props) => {
    const {
        name,
        temp,
        onTempChange,
        externalTemp,
        onExternalTempChange,
        internalTemp,
        onInternalTempChange,
        onClose,
    } = props;

    const handleTempChange = (e) => {
        if (!onTempChange) {
            return;
        }
        const { value } = e.target;
        const newTemp = value ? parseInt(value, 10) : 0;
        onTempChange(clamp(newTemp, 0, 100));
    };

    const handleExternalTempChange = (e) => {
        if (!onExternalTempChange) {
            return;
        }
        const { value } = e.target;
        const newTemp = value ? parseInt(value, 10) : 0;
        onExternalTempChange(clamp(newTemp, 0, 100));
    };

    const handleInternalTempChange = (e) => {
        if (!onInternalTempChange) {
            return;
        }
        const { value } = e.target;
        const newTemp = value ? parseInt(value, 10) : 0;
        onInternalTempChange(clamp(newTemp, 0, 100));
    };

    return (
        <Modal isOpen>
            <ModalContainer>
                <CloseButton title="&#10006;" onClick={onClose} />
                <Title>{name}</Title>
                <Strut vertical size={30} />
                <HorizontalContainer>
                    <StateTitle>Device Temp:</StateTitle>
                    <TempField value={temp.toString()} onChange={handleTempChange} type="number" />
                </HorizontalContainer>
                <Strut vertical size={15} />
                <HorizontalContainer>
                    <StateTitle>External Temp:</StateTitle>
                    <TempField
                        value={externalTemp.toString()}
                        onChange={handleExternalTempChange}
                        type="number"
                        disabled
                    />
                </HorizontalContainer>
                <Strut vertical size={15} />
                <HorizontalContainer>
                    <StateTitle>Internal Temp:</StateTitle>
                    <TempField
                        value={internalTemp.toString()}
                        onChange={handleInternalTempChange}
                        type="number"
                        disabled
                    />
                </HorizontalContainer>
            </ModalContainer>
        </Modal>
    );
};

export default HVACStateModal;
