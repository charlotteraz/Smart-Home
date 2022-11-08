import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ReactSwitch from 'react-switch';
import Colors from 'constants/colors';
import { Strut } from 'components/Layout';

const ModalContainer = styled.div`
    position: relative;
    align-self: center;
    width: 200px;
    height: 125px;
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

const DeviceStateModal = (props) => {
    const { name, state, onChange, onClose } = props;
    return (
        <Modal isOpen>
            <ModalContainer>
                <CloseButton title="&#10006;" onClick={onClose} />
                <Title>{name}</Title>
                <Strut vertical size={30} />
                <HorizontalContainer>
                    <StateTitle>State:</StateTitle>
                    <Strut size={15} />
                    <ReactSwitch
                        width={50}
                        height={24}
                        checked={state}
                        onChange={(checked) => onChange(checked)}
                    />
                </HorizontalContainer>
            </ModalContainer>
        </Modal>
    );
};

export default DeviceStateModal;
